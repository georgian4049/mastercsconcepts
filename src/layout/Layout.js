import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import AppBar from "./AppBar.jsx";
import Sidebar from "./Sidebar.jsx";
import { makeStyles } from "@material-ui/core/styles";
import Body from "../container/Body.jsx";

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
    backgroundColor: "#fff",
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
      <Route path="/" component={Sidebar} />
      <div className={classes.root}>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Switch>
            <Route
              path={`/:courseArea/:courseSubArea/:navSelected`}
              component={Body}
            />
          </Switch>
        </main>
      </div>
    </div>
  );
}
