import React from "react";
import { makeStyles } from "@material-ui/core";
import blog_img from "../../assets/blog_img.png";

const useStyles = makeStyles((theme) => ({
  root: {
    maxHeight: "160px",
  },
  image: {
    position: "relative",
    top: "0px",
    left: "0px",
    maxHeight: "100px",
  },
  type: {
    position: "absolute",
    float: "right",
    top: "0px",
  },
  description: {
    position: "absolute",
    bottom: "0px",
  },
}));

function ImageCard() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div classNam={classes.image}>
        <img src={blog_img} />
      </div>
      <div className={classes.type}>UX</div>
      <div className={classes.description}>UX</div>
    </div>
  );
}

export default ImageCard;
