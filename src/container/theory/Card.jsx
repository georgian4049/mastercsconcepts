import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import clsx from "clsx";
import {
  makeStyles,
  Card,
  CardActions,
  CardContent,
  Typography,
  IconButton,
  CardMedia,
  CardHeader,
  Collapse,
  Avatar,
} from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import no_img from "../../assets/gen/no_image.png";
import userImgUrl from "../../assets/gen/pp1.jpg";
import { dateWord } from "../../functions/function";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    minWidth: 275,
    maxHeight: 150,
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
  media: {
    height: 140,
    paddingTop: "56.25%", // 16:9
    maxHeight: 20,
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main,
  },
}));
export default function Cards({ data }) {
  const classes = useStyles();
  const {
    // eslint-disable-next-line
    title,
    datePublished,
    authorName,
    // imgUrl,
    description,
    _id,
  } = data;

  const history = useHistory();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // const handleCardClick = () => {};
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar
            aria-label="recipe"
            className={classes.avatar}
            src={authorName === "Ayush Shekhar" ? userImgUrl : ""}
          >
            {/* {authorName[0] + authorName.split(" ")[1][0]} */}
          </Avatar>
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title={title}
        subheader={dateWord(datePublished.split("T")[0])}
      />
      <Link
        to={`${history.location.pathname}/topicId/${_id}`}
        className={classes.link}
      >
        {/* <CardMedia className={classes.media} image={no_img} title="No Image" /> */}
        <CardContent>
          <Typography variant="body2">{`Author :- ${authorName}`}</Typography>
          <Typography
            variant="body2"
            noWrap
          >{`Description :- ${description}`}</Typography>
        </CardContent>
      </Link>
      {/* <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions> */}
      {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Description:</Typography>
          {description}
        </CardContent>
      </Collapse> */}
    </Card>
  );
}
