import { useHistory, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  makeStyles,
  Card,
  CardActions,
  IconButton,
  Tooltip,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 275,
    height: 150,
    minWidth: 275,
    margin: theme.spacing(1),
    position: "relative",
    backgroundColor: "#F26522",
    borderRadius: "10px",
  },
  button: {
    margin: 0,
    position: "absolute",
    top: "50%",

    msTransform: "translateY(-50%) translateX(50%)",
    transform: "translateY(-50%) translateX(50%)",
  },
  link: {
    textDecoration: "none",
    color: "#000000",
  },
}));
export default function Cards({ handleChange, name, val }) {
  const classes = useStyles();
  const history = useHistory();
  const { isAuthenticated } = useSelector((state) => state.authentication);
  return (
    <>
      {isAuthenticated ? (
        <Card className={classes.root} variant="outlined">
          <Link
            to={`${history.location.pathname}/new-content`}
            className={classes.link}
          >
            <CardActions className={classes.button}>
              <Tooltip title={"Add Content"}>
                <IconButton
                  aria-label="Upload"
                  size="medium"
                  disabled={!isAuthenticated}
                  onClick={() => handleChange(name, !val)}
                >
                  <EditIcon style={{ height: 90, width: 90, color: "#fff" }} />
                </IconButton>
              </Tooltip>
            </CardActions>
          </Link>
        </Card>
      ) : (
        <span>
          <Tooltip title="Please Login to Add Contents">
            <Card className={classes.root} variant="outlined">
              <CardActions className={classes.button}>
                <IconButton aria-label="Upload" size="medium" disabled>
                  <EditIcon style={{ height: 90, width: 90 }} />
                </IconButton>
              </CardActions>
            </Card>
          </Tooltip>
        </span>
      )}
    </>
  );
}
