import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./Navbar";
import Appbar from "./Appbar";
import { makeStyles } from "@material-ui/core/styles";
// import SelfService from "../container/selfService/SelfService";
// import Home from "../container/Home";
// import UpdateProfile from "../container/update/UpdateProfile";
// import Jobs from "../container/jobs";
// import Downloads from "../container/downloads";
// import Qliq from "../container/qliq/Qliq";

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
    // margin: theme.spacing(1),
    padding: theme.spacing(2),
  },
}));

export default function Layout() {
  const classes = useStyles();

  return (
    <div style={{ display: "Flex" }}>
      <Route exact path="/" render={() => <Redirect to="/login" />} />
      {/* <Route path="/" component={Navbar} /> */}
      <Route path="/" component={Appbar} />
      <div className={classes.root}>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Switch>
            {/* <Route exact path="/home" component={Home}></Route>
            <Route exact path="/self-service" component={SelfService}></Route>
            <Route exact path="/Jobs" component={Jobs}></Route>
            <Route exact path="/downloads" component={Downloads}></Route>
            <Route exact path="/qliq-difference" component={Qliq}></Route>
            <Route
              exact
              path="/update-profile"
              component={UpdateProfile}
            ></Route> */}
          </Switch>
        </main>
      </div>
    </div>
  );
}
