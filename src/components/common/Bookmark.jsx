import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Tooltip, IconButton, CircularProgress } from "@material-ui/core";
import NotBookMarkedIcon from "@material-ui/icons/BookmarkBorder";
import BookmarkedIcon from "@material-ui/icons/Bookmark";
import { MESSAGE, GET_CONTENT } from "../../state/actions/types";
import { bookmarkContent } from "../../api/content";

const Bookmark = ({
  bookmarkedBy,
  courseArea,
  courseSubArea,
  materialCategory,
  _id,
  iconSize,
}) => {
  const dispatch = useDispatch();
  const { username } = useSelector((state) => state.authentication);
  const [bookmarkLoader, setBookmarkLoader] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  useEffect(() => {
    if (bookmarkedBy && username && bookmarkedBy.includes(username)) {
      setBookmarked(true);
    }
  }, [bookmarkedBy, username]);
  const handleBookMark = async (e) => {
    e.preventDefault();
    try {
      setBookmarkLoader(true);
      const { data } = await bookmarkContent(
        courseArea,
        courseSubArea,
        materialCategory,
        _id
      );
      setBookmarked(!bookmarked);
      dispatch({
        type: GET_CONTENT,
        payload: {
          courseArea: courseArea,
          courseSubArea: courseSubArea,
          materialCategory: materialCategory,
          data: data.data,
        },
      });
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
  return (
    <div>
      <Tooltip title={bookmarked ? "Unmark" : "Bookmark"}>
        <IconButton tool onClick={handleBookMark}>
          {bookmarkLoader ? (
            <CircularProgress color="secondary" size={20} />
          ) : bookmarked ? (
            <BookmarkedIcon fontSize={iconSize} color="secondary" />
          ) : (
            <NotBookMarkedIcon fontSize={iconSize} />
          )}
        </IconButton>
      </Tooltip>
    </div>
  );
};

export default Bookmark;
