import { useHistory } from "react-router-dom";
import { Button, makeStyles } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import NewEditor from "../../container/editor/NewEditor";

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
        <br />

        <NewEditor />
      </div>
    </div>
  );
};

export default NewContent;
