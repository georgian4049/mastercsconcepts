import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
  },
  border: {
    borderBottom: "2px solid lightgray",
    width: "100%",
  },
  content: {
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    fontWeight: 500,
    fontSize: 22,
  },
}));

const DividerWithText = ({ label }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.border} />
      <span className={classes.content}>{label}</span>
      <div className={classes.border} />
    </div>
  );
};
export default DividerWithText;
