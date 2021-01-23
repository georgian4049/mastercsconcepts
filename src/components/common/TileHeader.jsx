import React from "react";
import { makeStyles, Typography, IconButton } from "@material-ui/core";
import AllOutIcon from "@material-ui/icons/AllOut";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "50px",
    width: "100%",
    // borderBottom: "1px solid black",
    backgroundColor: "theme.palette.background",
    // backgroundColor: "rgba(0,0,0,0.1)",
    color: "#F26522",
    display: "flex",
  },
  more: {
    width: "50px",
    height: "50px",
    float: "right",
    color: "white",
  },
  contentIcon: {
    width: "50px",
    height: "50px",
    minWidth: "50px",
  },
  contentTitle: {
    width: "90%",
    height: "50px",
    marginTop: "10px",
    marginLeft: "20px",
  },
}));

function TileHeader({ title, Icon }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.contentIcon}>
        <Icon style={{ width: "100%", height: "100%" }} />
      </div>
      <div className={classes.contentTitle}>
        <Typography variant="h6"> {title} </Typography>
      </div>
      <div className={classes.more}>
        <IconButton aria-label="expand" component="span">
          <AllOutIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default TileHeader;
