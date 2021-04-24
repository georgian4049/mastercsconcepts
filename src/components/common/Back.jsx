import { useHistory } from "react-router-dom";
import { Button, makeStyles } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const useStyles = makeStyles((theme) => ({
  root: { display: "flex" },
  header: {
    position: "fixed",
    width: "85%",
    height: "50px",
    zIndex: "99",
    // backgroundColor: "#fff",
    padding: "5px",
  },
  button: {
    margin: theme.spacing(1),
    position: "fixed",
    zIndex: "1",
  },
  content: {
    width: "100%",
    position: "relative",
    display: "block",
    top: "50px",
    padding: "15px",
    height: "100%",
  },
}));

const ContentContainer = ({ children }) => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <div>
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
      </div>
    </div>
  );
};

export default ContentContainer;
