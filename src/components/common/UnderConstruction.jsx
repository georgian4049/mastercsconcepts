import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import iconComingSoon from "../../assets/icons/coming_soon.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    backgroundColor: theme.palette.background.default,
    flexDirection: "column",
  },
}));

const Executive = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img
        style={{
          width: 242,
          height: 242,
          objectFit: "contain",
          marginBottom: 40,
        }}
        src={iconComingSoon}
        className="Group"
        alt="Coming Soon"
      ></img>
      <Typography variant="h4" color="textSecondary">
        Coming Soon
      </Typography>
    </div>
  );
};

export default Executive;
