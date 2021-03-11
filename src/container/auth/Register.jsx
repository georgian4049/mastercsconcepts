import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useHistory } from "react-router-dom";
import { registerUser } from "../../api/authentication";
import { Divider } from "@material-ui/core";
import { refresh } from "../../state/actions/authentication";
import Regex from "../../utils/Regex";
import { MESSAGE } from "../../state/actions/types";

function Copyright() {
  return (
    <Typography variant="h6" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="#">
        mastercsconcepts
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  margin: {
    marginTop: theme.spacing(1),
  },
  textField: {
    width: "50ch",
  },
}));

export default function SignIn() {
  const classes = useStyles();
  let history = useHistory();
  const dispatch = useDispatch();
  const { handleSubmit } = useForm();
  const { isAuthenticated } = useSelector((state) => ({
    isAuthenticated: state.authentication.isAuthenticated,
  }));

  const [confirmPassword, setConfirmPassword] = useState("");

  const [registerForm, setRegisterForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
  });
  const [error, setError] = useState({
    firstName: false,
    lastName: false,
    email: false,
    username: false,
    password: false,
    confirmPassword: false,
  });

  const [errorMessage, setErrorMessage] = useState({
    firstName: "Invalid First Name",
    lastName: "Invalid Last Name",
    email: "Invalid Email",
    username: "Invalid Username",
    password:
      "Password should be more than 6 charecters and must include atleast 1 special character, 1 number, 1 small and 1 caps alphabets",
    confirmPassword: "Values doesn't match with password",
  });

  const handleChange = (event) => {
    if (!checkValidity(event.target.name, event.target.value)) {
      setError({ ...error, [event.target.name]: true });
    } else {
      setError({ ...error, [event.target.name]: false });
    }
    setRegisterForm({
      ...registerForm,
      [event.target.name]: event.target.value,
    });
  };

  const checkValidity = (name, value) => {
    if (name === "firstName" || name === "lastName" || name === "username") {
      if (!Regex.specialCharCheck.test(value) && !Regex.validName.test(value))
        return false;
      return true;
    } else if (name === "email") {
      if (!Regex.validEmail.test(value)) return false;
      return true;
    } else if (name === "password") {
      if (!Regex.validPassword.test(value)) return false;
      return true;
    }
  };
  const handleBlur = (event) => {
    if (!event.target.value) {
      setError({ ...error, [event.target.name]: true });
    }
  };
  const handleConfirmPassword = (val) => {
    setConfirmPassword(val);
    if (val !== registerForm["password"]) {
      setError({ ...error, confirmPassword: true });
    } else {
      setError({ ...error, confirmPassword: false });
    }
  };

  const onSubmit = (data) => {
    data.preventDefault();
    let errors = false;

    Object.keys(error).map((x) => {
      if (error[x]) {
        errors = true;
      }
    });
    if (errors) {
      dispatch({
        type: MESSAGE.ERROR,
        payload: "Please fill the form correctly",
      });
    } else {
      register();
    }
  };

  useEffect(() => {
    intialCall();
  }, []);
  const intialCall = () => {
    const token = localStorage.getItem("token") || null;
    if (token) {
      dispatch(refresh({ token }));
    } else {
      // history.replace("/login");
    }
  };
  if (isAuthenticated) {
    history.replace("/home");
  } else {
    console.log("Couldn't login");
  }

  async function register() {
    try {
      const { data } = await registerUser(registerForm);
      dispatch({
        type: MESSAGE.SUCCESS,
        payload: "Registered Successfully! Please Login",
      });
      history.replace("/login");
    } catch (error) {
      console.log(error);
      if (error.response?.status === 400) {
        dispatch({
          type: MESSAGE.WRONG_LOGIN_CREDENTIALS,
          payload: "This email address is already registered with us",
        });
      } else if (error.response?.status === 401) {
        dispatch({
          type: MESSAGE.WRONG_LOGIN_CREDENTIALS,
          payload: "Username Taken",
        });
      } else {
        dispatch({
          type: MESSAGE.ERROR,
          payload: "Server Error! Please try again later",
        });
      }
    }
  }

  return (
    <>
      {isAuthenticated ? (
        ""
      ) : (
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Register
            </Typography>
            <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6}>
                  <TextField
                    variant="outlined"
                    margin="none"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    name="firstName"
                    helperText={error["firstName"] && errorMessage["firstName"]}
                    value={registerForm.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={error["firstName"]}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <TextField
                    variant="outlined"
                    margin="none"
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    helperText={error["lastName"] && errorMessage["lastName"]}
                    value={registerForm.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={error["lastName"]}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                  <TextField
                    variant="outlined"
                    margin="none"
                    required
                    fullWidth
                    type="email"
                    id="email"
                    label="Email Address"
                    name="email"
                    helperText={error["email"] && errorMessage["email"]}
                    value={registerForm.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={error["email"]}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                  <TextField
                    variant="outlined"
                    margin="none"
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                    helperText={error["username"] && errorMessage["username"]}
                    value={registerForm.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={error["username"]}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                  <TextField
                    variant="outlined"
                    margin="none"
                    required
                    fullWidth
                    type="password"
                    id="password"
                    label="Password"
                    name="password"
                    helperText={error["password"] && errorMessage["password"]}
                    value={registerForm.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={error["password"]}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                  <TextField
                    variant="outlined"
                    margin="none"
                    required
                    fullWidth
                    type="password"
                    id="confirmPassword"
                    label="Confirm Password"
                    name="confirmPassword"
                    helperText={
                      error["confirmPassword"] &&
                      errorMessage["confirmPassword"]
                    }
                    value={confirmPassword}
                    onChange={(e) => handleConfirmPassword(e.target.value)}
                    onBlur={handleBlur}
                    error={error["confirmPassword"]}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                className={classes.submit}
                onClick={onSubmit}
              >
                Register
              </Button>
            </form>
          </div>
          <Divider />
          <br />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.login}
            onClick={() => history.replace("/login")}
          >
            Login
          </Button>
          <Box mt={8}>
            <Copyright />
          </Box>
        </Container>
      )}
    </>
  );
}
