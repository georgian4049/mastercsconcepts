import { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import {
  Button,
  makeStyles,
  TextField,
  Grid,
  FormControl,
  Input,
  InputLabel,
  InputAdornment,
} from "@material-ui/core";
import clsx from "clsx";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { theoryData } from "../../utils/mock";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import TextEditor from "./TextEditor";

const useStyles = makeStyles((theme) => ({
  header: {
    position: "fixed",
    width: "85%",
    height: "50px",
    zIndex: "99",
    backgroundColor: "#fff",
    padding: "5px",
  },
  button: {
    margin: theme.spacing(1),
    position: "fixed",
    zIndex: "1",
  },
  articleContent: {
    width: "100%",
    position: "relative",
    top: "50px",
    padding: "15px",
  },
}));

const tags = ["Machine Learning", "Pandas", "Matplotlib"];

const TopicContent = (state) => {
  const classes = useStyles();
  const history = useHistory();
  const [content, setContent] = useState("");
  useEffect(() => {
    console.log(history.location.pathname);
    const path = history.location.pathname.split("/");
    if (theoryData[path[1]]?.[path[2]]?.[path[3]]) {
      const { cardInfo } = theoryData["adv"]["ML"]["theory"].find(
        (i) => i.cardInfo.id === "1"
      );
      setContent(cardInfo);
    }
  }, []);
  return (
    <div>
      <div className={classes.header}>
        <Button
          color="secondary"
          size="large"
          className={classes.button}
          startIcon={<ArrowBackIcon />}
          onClick={() => history.goBack()}
        >
          BACK
        </Button>
      </div>

      <div className={classes.articleContent}>
        {/* <div style={{ marginTop: "10px" }}> */}
        <TextEditor />
      </div>
    </div>
  );
};

export default TopicContent;
