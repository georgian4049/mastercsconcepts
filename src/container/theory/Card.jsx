import { Link, useHistory } from "react-router-dom";
import {
  makeStyles,
  Card,
  CardActions,
  CardContent,
  Typography,
  IconButton,
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 275,
    minWidth: 275,
    margin: theme.spacing(1),
    border: `1px solid  green`,
    borderRadius: "10px",
  },
  header: {
    height: "30px",
    display: "flex",
    "&>*": {
      margin: theme.spacing(0.5),
    },
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
  },
  chip: {
    marginLeft: "auto",
    "&>*": {
      color: "#fff",
    },
  },
  link: {
    textDecoration: "none",
    color: "#000000",
  },
}));
export default function Cards({ data }) {
  const classes = useStyles();
  const {
    // eslint-disable-next-line
    title,
    datePublished,
    authorUsername,
    // imgUrl,
    // description,
    _id,
  } = data;

  const history = useHistory();

  // const handleCardClick = () => {};
  return (
    <Card className={classes.root} variant="outlined">
      <Link
        to={`${history.location.pathname}/topicId/${_id}`}
        className={classes.link}
      >
        <CardContent>
          <div className={classes.header}>
            <Typography className={classes.title} noWrap>
              {title}
            </Typography>
          </div>
          <br />
          <Typography variant="body2">{`Author :- ${authorUsername}`}</Typography>
          <Typography variant="body2">{"description"}</Typography>
          <Typography variant="body2">
            {`Published on :- ${datePublished.split("T")[0]}`}
          </Typography>
          {/* <Typography variant="body2">{`Assigned To :- ${assignee}`}</Typography> */}
        </CardContent>
      </Link>
      {/* <CardActions>
        <IconButton aria-label="Upload" size="small">
          <FavoriteIcon />
        </IconButton>
      </CardActions> */}
    </Card>
  );
}
