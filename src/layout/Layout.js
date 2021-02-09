import React from "react";
import { Route, Switch, Redirect, useRouteMatch } from "react-router-dom";
import AppBar from "./AppBar";
import Sidebar from "./Sidebar";
import { makeStyles } from "@material-ui/core/styles";
import Theory from "../container/theory";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "100%",
    marginLeft: "0px",
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: "#f9f9f9",
    maxWidth: "1470px", //or 1180
    minWidth: " 200px",
    margin: theme.spacing(1),
  },
}));

export default function Layout() {
  const classes = useStyles();

  return (
    <div style={{ display: "Flex" }}>
      <Route exact path="/" render={() => <Redirect to="/login" />} />
      <Route path="/" component={AppBar} />
      <div className={classes.root}>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Switch>
            <Route path="/" component={Sidebar} />
            <Route path={`/theory`} component={Theory}></Route>
            {/* <Route exact path="/old-requests" component={OldRequests}></Route>
            <Route exact path="/mail" component={Mail}></Route>
            <Route
              exact
              path="/notifications"
              component={Notifications}
            ></Route> */}
          </Switch>
        </main>
      </div>
    </div>
  );
}
