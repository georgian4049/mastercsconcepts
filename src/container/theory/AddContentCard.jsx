import { useHistory, Link } from "react-router-dom";
import {
  makeStyles,
  Card,
  CardActions,
  IconButton,
  Tooltip,
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import EditIcon from "@material-ui/icons/Edit";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 275,
    height: 180,
    minWidth: 275,
    margin: theme.spacing(1),
    position: "relative",
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
  return (
    <Card className={classes.root} variant="outlined">
      <Link
        to={`${history.location.pathname}/new-content`}
        className={classes.link}
      >
        <CardActions className={classes.button}>
          <Tooltip title="Add Content" aria-label="add">
            <IconButton
              aria-label="Upload"
              size="large"
              onClick={() => handleChange(name, !val)}
            >
              <EditIcon style={{ height: 90, width: 90 }} />
            </IconButton>
          </Tooltip>
        </CardActions>
      </Link>
    </Card>
  );
}
