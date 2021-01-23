import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { Grid, Hidden } from "@material-ui/core";
// import illustration from "../assets/illustration.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#ffffff",
    overflowY: "hidden",
  },
  gridContainer: { height: "100vh" },

  image: {
    height: "102%",
    position: "absolute",
    bottom: 0,
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    maxWidth: "640px",
    margin: "0 auto",
    backgroundColor: "3ffffff",
  },
  form: {
    width: "80%", // Fix IE 11 issue.
  },
  submit: {
    margin: theme.spacing(3, 0, 3),
    padding: theme.spacing(2),
  },
  link: {
    color: "inherit",
    textDecoration: "inherit",
  },
  stack: {
    zIndex: 1,
    color: "rgb(0,0,0)",
  },
  loginTitle: {
    zIndex: 1,
    color: "rgba(0,0,0,0.9)",
  },
}));

export default function Login() {
  const classes = useStyles();
  let history = useHistory();
  const { register, handleSubmit } = useForm();
  const { isAuthenticated } = useSelector((state) => ({
    isAuthenticated: state.authentication.isAuthenticated,
  }));
  const userDetails = useSelector((state) => state.authentication.user);

  const [loginForm, setLoginForm] = useState({ email: "", password: "" });

  const handleChange = (prop) => (event) => {
    setLoginForm({ ...loginForm, [prop]: event.target.value });
  };

  const onSubmit = (data) => {
    data.preventDefault();
    history.replace("/home");
  };

  if (isAuthenticated) {
    if (userDetails.role === "client") {
      history.replace("/new-request");
    } else {
      history.replace("/pending-requests");
    }
  }
  return (
    <div className={classes.root}>
      <Grid container className={classes.gridContainer}>
        <Hidden smDown>
          <Grid item md={8} lg={8} cl={8} className={classes.gridImage}>
            <img
              // src={illustration}
              alt="CSINOUT"
              className={classes.image}
            />
          </Grid>
        </Hidden>
        <Grid item xs={12} md={4} lg={4} xl={4}>
          <div className={classes.paper}>
            <Typography component="h1" variant="h5" className={classes.stack}>
              Altimetrik Alumini Portal
            </Typography>
            <Typography
              component="h1"
              variant="h6"
              className={classes.loginTitle}
            >
              Login
            </Typography>
            <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="email"
                placeholder="email"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={handleChange("email")}
                inputRef={register({
                  required: true,
                  max: 10,
                  min: 5,
                })}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                placeholder="Enter Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handleChange("password")}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                disableElevation
                onClick={onSubmit}
                disabled={!(loginForm.email && loginForm.password)}
              >
                Login
              </Button>
            </form>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
