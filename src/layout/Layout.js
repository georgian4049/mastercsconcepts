import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import AppBar from "./AppBar";
import Sidebar from "./Sidebar";
import { makeStyles } from "@material-ui/core/styles";
import Body from "../container/Body";
import NewContent from "../components/common/NewContent";
import WrongPage from "./WrongPage";
import HomePage from "../container/home";
import DisplayNew from "../components/common/DisplayNew";

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
    height: "100%",
    minHeight: "100vh",
    maxWidth: "100%", //or 1180
    minWidth: " 200px",
    marginTop: theme.spacing(0),
    margin: theme.spacing(1),
  },
}));

export default function Layout() {
  const classes = useStyles();

  return (
    <div style={{ display: "flex" }}>
      <Route exact path="/" render={() => <Redirect to="/login" />} />
      <Route path="/" component={AppBar} />
      <Route path="/" component={Sidebar} />
      <div className={classes.root}>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Switch>
            <Route exact path={`/wrong-page`} component={WrongPage} />
            <Route exact path={`/home`} component={HomePage} />
            <Route
              exact
              path={`/:courseArea/:courseSubArea/:materialCategory`}
              component={Body}
            />
            <Route
              exact
              path={`/:courseArea/:courseSubArea/:materialCategory/new-content`}
              component={NewContent}
            />
            <Route
              exact
              path={`/:courseArea/:courseSubArea/:materialCategory/topicId/:topicId`}
              component={DisplayNew}
            />

            <Route path="/" component={WrongPage} />
          </Switch>
        </main>
      </div>
    </div>
  );
}
