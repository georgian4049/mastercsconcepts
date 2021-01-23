import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Skeleton from "@material-ui/lab/Skeleton";

const useStyles = makeStyles((theme) => ({
  skeleton: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: theme.spacing(4)
  }
}));

export default function Loader() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.skeleton}>
        <Skeleton variant="text" width="80%" />
        <Skeleton variant="text" width="80%" />
        <Skeleton variant="text" width="80%" />
        <Skeleton variant="text" width="80%" />
      </div>
      <div className={classes.skeleton}>
        <Skeleton variant="text" width="80%" />
        <Skeleton variant="text" width="80%" />
        <Skeleton variant="text" width="80%" />
        <Skeleton variant="text" width="80%" />
      </div>
      <div className={classes.skeleton}>
        <Skeleton variant="text" width="80%" />
        <Skeleton variant="text" width="80%" />
        <Skeleton variant="text" width="80%" />
        <Skeleton variant="text" width="80%" />
      </div>
      <div className={classes.skeleton}>
        <Skeleton variant="text" width="80%" />
        <Skeleton variant="text" width="80%" />
        <Skeleton variant="text" width="80%" />
        <Skeleton variant="text" width="80%" />
      </div>
    </>
  );
}
