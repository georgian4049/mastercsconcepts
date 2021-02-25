import { useState } from "react";
import { TextField, makeStyles } from "@material-ui/core";
import EditingBox from "./EditingBox";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  title: {
    width: "100%",
    width: "100ch",
    margin: "auto",
  },
}));

const EditorIndex = () => {
  const classes = useStyles();
  const [content, setContent] = useState({
    title: "",
    date: "", //epoch
    author: "",
    content: [],
  });
  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <TextField id="title" fullWidth label="Title" />
      </div>
      <div>
        <EditingBox />
      </div>
    </div>
  );
};

export default EditorIndex;
