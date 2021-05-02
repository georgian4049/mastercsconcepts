import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { makeStyles, IconButton, Tooltip, Chip } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import LinkIcon from "@material-ui/icons/Link";
import Typography from "@material-ui/core/Typography";
import { dateWord } from "../../functions/function";
import { MESSAGE } from "../../state/actions/types";
import userImgUrl from "../../assets/gen/pp1.jpg";
import Bookmark from "./Bookmark";
import no_img from "../../assets/gen/No_img.jpg";
import { getCourseSubAreaFullName } from "../../functions/function";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    maxHeight: 300,
    minHeight: 300,
    position: "relative",
  },
  link: {
    textDecoration: "none",
    color: "#000000",
  },
  description: {
    maxWidth: "100%",
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 2,
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  chip: {
    position: "absolute",
    top: "100px",
    left: "5px",
    zIndex: 100,
    marginBottom: "5px",
  },
  authorName: {
    position: "absolute",
    top: "110px",
    right: "5px",
    zIndex: 2,
    left: "5px",
  },
});

export default function Cards({ data, pageType }) {
  const classes = useStyles();
  const { isAuthenticated } = useSelector((state) => state.authentication);
  const dispatch = useDispatch();
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
  const {
    // eslint-disable-next-line
    title,
    datePublished,
    authorName,
    // imgUrl,
    description,
    _id,
    tags,
    courseArea,
    courseSubArea,
    materialCategory,
    bookmarkedBy,
  } = data;
  const history = useHistory();

  return (
    <Card className={classes.root}>
      <Link
        to={
          pageType === "home"
            ? `${courseArea}/${courseSubArea}/${materialCategory}/topicId/${_id}`
            : `${history.location.pathname}/topicId/${_id}`
        }
        target={pageType === "home" && "_blank"}
        className={classes.link}
      >
        {isAuthenticated && (
          <Bookmark
            courseArea={courseArea}
            courseSubArea={courseSubArea}
            materialCategory={materialCategory}
            _id={_id}
            bookmarkedBy={bookmarkedBy}
            iconSize="small"
          />
        )}
        {pageType === "home" && (
          <Tooltip
            title={getCourseSubAreaFullName(courseSubArea, courseArea)}
            placement="bottom-start"
          >
            <Chip
              label={courseSubArea}
              color="secondary"
              className={classes.chip}
            />
          </Tooltip>
        )}
        <Tooltip title="Author's Name" placement="bottom-end">
          <Typography align="right" noWrap className={classes.authorName}>
            -{authorName}
          </Typography>
        </Tooltip>

        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image={no_img}
            style={{ zIndex: 1 }}
            title="Contemplative Reptile"
          />
          <CardContent style={{ height: "100px" }}>
            <Typography gutterBottom variant="h6" component="h2" noWrap>
              {title}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className={classes["description"]}
            >
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
      <CardActions style={{ bottom: 0 }}>
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
      </CardActions>
    </Card>
  );
}
