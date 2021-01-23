import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  header: {
    // marginTop: theme.spacing(-5),
    margin: "10px", //implemented for Architectural review
  },
}));

export default function PlatformHeader({ heading }) {
  const classes = useStyles();
  return (
    <Typography variant="h4" gutterBottom={true} className={classes.header}>
      {heading}
    </Typography>
  );
}
