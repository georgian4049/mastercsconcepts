import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  header: {
    alignItems: "center",
    marginBottom: theme.spacing(3),
  },
}));

const Header = ({ heading }) => {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <Typography component="h1" variant="h5" align="center">
        {heading}
      </Typography>
    </div>
  );
};

export default Header;
