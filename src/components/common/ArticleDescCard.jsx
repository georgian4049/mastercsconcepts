import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import clsx from "clsx";
import {
  makeStyles,
  Card,
  CardActions,
  CardContent,
  Typography,
  IconButton,
  CardHeader,
  Collapse,
  Avatar,
  Chip,
  Tooltip,
  CircularProgress,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import LinkIcon from "@material-ui/icons/Link";
import userImgUrl from "../../assets/gen/pp1.jpg";
import { dateWord } from "../../functions/function";
import { MESSAGE } from "../../state/actions/types";
import NotBookMarkedIcon from "@material-ui/icons/BookmarkBorder";
import BookmarkedIcon from "@material-ui/icons/Bookmark";
import { bookmarkContent } from "../../api/content";

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
  cardContent: {
    paddingBottom: "0px",
  },
  cardContentChip: {
    "&>*": {
      marginRight: theme.spacing(1),
    },
  },
  icon: {
    width: 30,
    position: "absolute",
    top: 24,
    right: 24,
    cursor: "pointer",
  },
}));
export default function Cards({ data }) {
  const classes = useStyles();
  const { isAuthenticated, username } = useSelector(
    (state) => state.authentication
  );

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
    bookMarked,
    courseArea,
    courseSubArea,
    materialCategory,
    bookmarkedBy,
  } = data;
  const history = useHistory();
  const [expanded, setExpanded] = useState(false);
  const [bookmarkLoader, setBookmarkLoader] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    console.log(bookmarkedBy);
    console.log(username);
    if (bookmarkedBy && username && bookmarkedBy.includes(username)) {
      setBookmarked(true);
    }
  }, [bookmarkedBy, username]);
  const handleBookMark = async (e) => {
    e.preventDefault();
    try {
      setBookmarkLoader(true);
      await bookmarkContent(courseArea, courseSubArea, materialCategory, _id);
      setBookmarked(!bookmarked);
      dispatch({
        type: MESSAGE.SUCCESS,
        payload: bookmarked
          ? "Unmarked Successfully"
          : "Bookmarked Successfully",
      });
    } catch (error) {
      setBookmarkLoader(true);
      console.log(error);
      if (error.response?.status === 400) {
        dispatch({
          type: MESSAGE.ERROR,
          payload: "Something Went Wrong! Couldn't bookmark. Please try later",
        });
      } else {
        dispatch({
          type: MESSAGE.ERROR,
          payload: "Server Error! Please try again later",
        });
      }
    } finally {
      setBookmarkLoader(false);
    }
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
          action={
            isAuthenticated && (
              <Tooltip title={bookMarked ? "Unmark" : "Bookmark"}>
                <IconButton tool aria-label="settings" onClick={handleBookMark}>
                  {bookmarkLoader ? (
                    <CircularProgress color="secondary" size={20} />
                  ) : bookmarked ? (
                    <BookmarkedIcon />
                  ) : (
                    <NotBookMarkedIcon />
                  )}
                </IconButton>
              </Tooltip>
            )
          }
          title={title}
          subheader={dateWord(datePublished?.split("T")[0])}
        />
        <CardContent style={{ paddingBottom: "0px" }}>
          <Typography variant="body2">{`Author :- ${authorName}`}</Typography>
          <Typography noWrap>{`Description :- ${description}`}</Typography>
        </CardContent>
      </Link>
      <CardActions disableSpacing>
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
        <Link
          to={`${history.location.pathname}/topicId/${_id}`}
          className={classes.link}
        >
          <CardContent>
            <Typography paragraph>{`Description :- ${description}`}</Typography>
            <Typography paragraph>Tags:</Typography>
            {tags &&
              tags.map((tag) => (
                <Chip label={tag} color="secondary" className={classes.chip} />
              ))}
          </CardContent>
        </Link>
      </Collapse>
    </Card>
  );
}
