import { useState } from "react";
import { useDispatch } from "react-redux";
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
  Chip,
  Tooltip,
} from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import LinkIcon from "@material-ui/icons/Link";
import no_img from "../../assets/gen/no_image.png";
import userImgUrl from "../../assets/gen/pp1.jpg";
import { dateWord } from "../../functions/function";
import { MESSAGE } from "../../state/actions/types";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    minWidth: 275,
    // height: 150,
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
    margin: theme.spacing(0.5),
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
  const dispatch = useDispatch();
  const {
    // eslint-disable-next-line
    title,
    datePublished,
    authorName,
    // imgUrl,
    description,
    _id,
    tags,
  } = data;

  const history = useHistory();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const copyToClipboard = (str) => {
    const el = document.createElement("textarea");
    el.value = str;
    el.setAttribute("readonly", "");
    el.style.position = "absolute";
    el.style.left = "-9999px";
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    dispatch({ type: MESSAGE.NORMAL, payload: "Link Copied Successfully" });
  };

  // const handleCardClick = () => {};
  return (
    <Card className={classes.root}>
      <Link
        to={`${history.location.pathname}/topicId/${_id}`}
        className={classes.link}
      >
        <CardHeader
          avatar={
            <Avatar
              aria-label="recipe"
              className={classes.avatar}
              src={authorName === "Ayush Shekhar" ? userImgUrl : ""}
            ></Avatar>
          }
          title={title}
          subheader={dateWord(datePublished.split("T")[0])}
        />
        <CardContent>
          <Typography variant="body2">{`Author :- ${authorName}`}</Typography>
          <Typography noWrap>{`Description :- ${description}`}</Typography>
        </CardContent>
      </Link>
      <CardActions disableSpacing>
        {/* <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton> */}
        <Tooltip title="Copy Link to share the content">
          <IconButton
            aria-label="share"
            onClick={() =>
              copyToClipboard(`${window.location.href}/topicId/${_id}`)
            }
          >
            <LinkIcon />
          </IconButton>
        </Tooltip>
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
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{`Description :- ${description}`}</Typography>
          <Typography paragraph>Tags:</Typography>
          {tags &&
            tags.map((tag) => (
              <Chip label={tag} color="secondary" className={classes.chip} />
            ))}
        </CardContent>
      </Collapse>
    </Card>
  );
}
