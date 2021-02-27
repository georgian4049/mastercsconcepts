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
export default function Cards({ items }) {
  const classes = useStyles();
  const {
    // eslint-disable-next-line
    title,
    publishedOn,
    imgUrl,
    description,
    id,
  } = items;

  const history = useHistory();

  // const handleCardClick = () => {};
  return (
    <Card className={classes.root} variant="outlined">
      <Link
        to={`${history.location.pathname}/topicId/${id}`}
        className={classes.link}
      >
        <CardContent>
          <div className={classes.header}>
            <Typography className={classes.title}>{title}</Typography>
            <div className={classes.chip}>
              <img
                style={{ width: "100px", height: "30px" }}
                // src={require(`../../assets/topic/matplotlib.svg`)}
                src={imgUrl}
                alt={title}
              />
              {/* <Avatar alt="Remy Sharp" src={matplotlib} /> */}
            </div>
          </div>
          <br />
          <Typography variant="body2">{description}</Typography>
          <Typography variant="body2">
            {`Published on :- ${publishedOn}`}
          </Typography>
          {/* <Typography variant="body2">{`Assigned To :- ${assignee}`}</Typography> */}
        </CardContent>
      </Link>
      <CardActions>
        <IconButton aria-label="Upload" size="small">
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
