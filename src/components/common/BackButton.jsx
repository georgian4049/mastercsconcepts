import { useHistory } from "react-router-dom";
import { Button, makeStyles } from "@material-ui/core";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";
const useStyles = makeStyles((theme) => ({
  header: {
    position: "fixed",
    // width: "85%",
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
}));

const BackButton = () => {
  const classes = useStyles();
  const history = useHistory();
  return (
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
  );
};

export default BackButton;
