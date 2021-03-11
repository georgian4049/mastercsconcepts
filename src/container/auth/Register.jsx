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
import { login } from "../../state/actions/authentication";
import { Divider } from "@material-ui/core";
import { refresh } from "../../state/actions/authentication";

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
    marginTop: theme.spacing(8),
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
  const { register, handleSubmit } = useForm();
  const { isAuthenticated } = useSelector((state) => ({
    isAuthenticated: state.authentication.isAuthenticated,
  }));

  const [registerForm, setRegisterForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event) => {
    setRegisterForm({
      ...registerForm,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = (data) => {
    data.preventDefault();
    dispatch(login(registerForm));
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

  //   if (isAuthenticated) {
  //     history.replace("/home");
  //   } else {
  //     console.log("Couldn't Register");
  //     //  history.replace("/pending-requests");
  //   }
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
                    value={registerForm.firstName}
                    onChange={handleChange}
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
                    value={registerForm.lastName}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                  <TextField
                    variant="outlined"
                    margin="none"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    value={registerForm.email}
                    onChange={handleChange}
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
                    value={registerForm.username}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                  <TextField
                    variant="outlined"
                    margin="none"
                    required
                    fullWidth
                    id="password"
                    label="Password"
                    name="password"
                    value={registerForm.password}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                  <TextField
                    variant="outlined"
                    margin="none"
                    required
                    fullWidth
                    id="confirmPassword"
                    label="Confirm Password"
                    name="confirmPassword"
                    value={registerForm.confirmPassword}
                    onChange={handleChange}
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
