import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import SignalWifi0BarIcon from "@material-ui/icons/SignalWifi0Bar";
import AddContentFab from "./AddContentFab";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "80%",
    backgroundColor: theme.palette.background.default,
    flexDirection: "column",
  },
  icon: { width: 242, height: 242, objectFit: "contain", marginBottom: 40 },
}));

const Executive = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <SignalWifi0BarIcon className={classes["icon"]} />
      <Typography variant="h4" color="textSecondary">
        No Contents Here! Please contribute, Thanks!
      </Typography>
      <AddContentFab />
    </div>
  );
};

export default Executive;
