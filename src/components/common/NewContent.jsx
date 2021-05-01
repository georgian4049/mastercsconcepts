import { makeStyles } from "@material-ui/core";
import BackButton from "./BackButton";
import Editor from "../../container/editor/Editor";

const useStyles = makeStyles((theme) => ({
  header: {
    position: "fixed",
    width: "85%",
    height: "50px",
    zIndex: "99",
    padding: "5px",
  },
  button: {
    margin: theme.spacing(1),
    position: "fixed",
    zIndex: "1",
  },
  articleContent: {
    maxWidth: "100%",
    position: "relative",
    top: "50px",
    padding: "15px",
  },
}));

const NewContent = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.header}>
        <BackButton />
      </div>
      <div className={classes.articleContent}>
        <br />

        <Editor />
      </div>
    </div>
  );
};

export default NewContent;
