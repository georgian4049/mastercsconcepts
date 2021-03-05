import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, makeStyles, Typography } from "@material-ui/core";
import { theoryData } from "../../utils/mock";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import NewEditor from "./NewEditor";

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
    maxWidth: "100%",
    position: "relative",
    top: "50px",
    padding: "15px",
  },
}));

const TopicContent = () => {
  const classes = useStyles();
  const history = useHistory();
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
        <Typography variant="h5" align="center">
          Add your contents Here...
        </Typography>
        <br />

        <NewEditor />
      </div>
    </div>
  );
};

export default TopicContent;
