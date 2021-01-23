import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import AppBar from "./AppBar";
import { makeStyles } from "@material-ui/core/styles";
// import SelfService from "../container/selfService/SelfService";
// import Home from "../container/Home";
// import UpdateProfile from "../container/update/UpdateProfile";
// import Jobs from "../container/jobs";
// import Downloads from "../container/downloads";
// import Qliq from "../container/qliq/Qliq";

const useStyles = makeStyles((theme) => ({
  root: {
    // display: "flex",
    width: "100%",
    marginLeft: "0px",
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  // content: {
  //   backgroundColor: "#f9f9f9",
  //   maxWidth: "1470px", //or 1180
  //   minWidth: " 200px",
  //   // margin: theme.spacing(1),
  //   padding: theme.spacing(2),
  // },
}));

export default function Layout() {
  const classes = useStyles();

  return (
    <div>
      <Route exact path="/login" render={() => <Redirect to="/login" />} />
      <Route path="/" component={AppBar} />

      <div className={classes.root}>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Switch>
            <Route exact path="/theory" component={AppBar}></Route>
            <Route exact path="/practical" component={AppBar}></Route>
            <Route exact path="/blogs" component={AppBar}></Route>
            <Route exact path="/contirubutors" component={AppBar}></Route>
            <Route exact path="/subscribe" component={AppBar}></Route>
            <Route exact path="/downloads" component={AppBar}></Route>
          </Switch>
        </main>
      </div>
    </div>
  );
}
