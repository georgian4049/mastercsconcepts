import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Hidden, Box } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { login } from "../../state/actions/authentication";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { refresh } from "../../state/actions/authentication";
import CopyrightFooter from "../../components/common/CopyrightFooter";
import DividerWithText from "../../components/common/DividerWithText";
import cs from "../../assets/gen/cs.png";

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

  useEffect(() => {
    intialCall();
    /*eslint-disable-next-line*/
  }, []);
  const intialCall = () => {
    const token = localStorage.getItem("token") || null;
    if (token) {
      dispatch(refresh({ token }));
    } else {
      // history.replace("/login");
    }
  };
  const [showPassword, setShowPassword] = useState(false);

  const [loginForm, setLoginForm] = useState({ email: "", password: "" });

  const handleChange = (event) => {
    setLoginForm({ ...loginForm, [event.target.name]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login(loginForm));
  };

  const submitTestAcct = (e) => {
    e.preventDefault();
    dispatch(login({ email: "test@mastercsconcepts.com", password: "test" }));
  };

  if (isAuthenticated) {
    history.replace("/home");
  } else {
    console.log("Couldn't login");
  }
  return (
    // <Container component="main" maxWidth="xs">

    //   <CopyrightFooter />
    // </Container>
    <>
      <Box display="flex" width="100%">
        <Hidden smDown>
          <Box
            width="50vw"
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="95vh"
            // p={"50px"}
          >
            {/* <Typography
              paragraph
              align="center"
              variant="h5"
              justifyContent="center"
              style={{ fontFamily: "URW Chancery L, cursive" }}
            >
              Mastercsconcepts is a catalog of core and advanced computer
              science (CS) concepts. CS enthusiasts can use this platform for
              learning CS topics in a structured manner. Users can also use this
              platform to share their technical knowledge by writing technical
              articles in the form of blogs, theoretical contents, research
              papers, and more.
            </Typography> */}
            <img src={cs} alt="cs" />
          </Box>
        </Hidden>
        <Box
          // width="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          // pl="50px"
          // pr="50px"
          height="100%"
        >
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
              <TextField
                variant="outlined"
                margin="none"
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={loginForm.email}
                onChange={handleChange}
                // autoComplete="email"
                autoFocus
                inputRef={register({
                  required: true,
                  max: 10,
                  min: 5,
                })}
              />
              <FormControl
                className={clsx(classes.margin, classes.textField)}
                variant="outlined"
                style={{ width: "100%" }}
              >
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  fullWidth
                  margin="none"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={loginForm.password}
                  onChange={handleChange}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {loginForm.showPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  labelWidth={70}
                />
              </FormControl>

              <Grid container>
                <Grid item xs>
                  <FormControlLabel
                    control={<Checkbox value="remember" color="secondary" />}
                    label="Remember me"
                  />
                </Grid>
                <Grid item style={{ marginTop: "10px" }}>
                  <Link href="/forgot-password" variant="body2">
                    Forgot password?
                  </Link>
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
                Sign In
              </Button>
              <DividerWithText label="or" />
              <br />
              <Button
                fullWidth
                variant="contained"
                color=""
                className={classes.login}
                onClick={submitTestAcct}
              >
                Sign in using our Test account
              </Button>
              <br />
              <DividerWithText label="or" />
              <br />
              <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.login}
                onClick={() => history.replace("/register")}
              >
                Register
              </Button>
            </form>
          </div>
        </Box>
      </Box>
      <CopyrightFooter />
    </>
  );
}
