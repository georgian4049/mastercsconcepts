import { LOGOUT, MESSAGE, GET_CONTENT, LOADER, CONTENT } from "./types";
import { postContent, getContent, getAllContent } from "../../api/content";
// import Message from "../../utils/message";

export function logout() {
  return {
    type: LOGOUT,
  };
}

export function postContents(body) {
  return async function (dispatch) {
    try {
      const { data } = await postContent(body);
      dispatch({
        type: MESSAGE.SUCCESS,
        payload: data.message,
      });
    } catch (error) {
      console.log(error);
      if (error.response?.status === 400) {
        dispatch({
          type: MESSAGE.ERROR,
          payload: "You have already posted some content with same Title",
        });
      } else {
        dispatch({
          type: MESSAGE.ERROR,
          payload: "Server Error! Please try again later",
        });
      }
    }
  };
}

export function getAllContents() {
  return async function (dispatch) {
    try {
      dispatch({ type: LOADER["HOME_CONTENT"], payload: true });
      const { data } = await getAllContent();
      dispatch({
        type: CONTENT["GET_ALL"],
        payload: data.data,
      });
    } catch (error) {
      console.log(error);
      dispatch({ type: LOADER["HOME_CONTENT"], payload: false });
      if (error.response?.status === 400) {
        dispatch({
          type: MESSAGE.ERROR,
          payload: "Couldn't Post due to Conflict",
        });
      } else {
        dispatch({
          type: MESSAGE.ERROR,
          payload: "Something Went Wrong",
        });
      }
    } finally {
      dispatch({ type: LOADER["HOME_CONTENT"], payload: false });
    }
  };
}

export function getContents(courseArea, courseSubArea, materialCategory) {
  return async function (dispatch) {
    try {
      dispatch({ type: LOADER["CONTENT"], payload: true });
      const { data } = await getContent(
        courseArea,
        courseSubArea,
        materialCategory
      );
      dispatch({
        type: GET_CONTENT,
        payload: {
          courseArea: courseArea,
          courseSubArea: courseSubArea,
          materialCategory: materialCategory,
          data: data.data,
        },
      });
    } catch (error) {
      console.log(error);
      if (error.response?.status === 400) {
        dispatch({
          type: MESSAGE.ERROR,
          payload: "Couldn't Post due to Conflict",
        });
      } else {
        dispatch({
          type: MESSAGE.ERROR,
          payload: "Server Error! Please try again later",
        });
      }
    } finally {
      dispatch({ type: LOADER["CONTENT"], payload: false });
    }
  };
}
