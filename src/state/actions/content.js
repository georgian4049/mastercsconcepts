import { LOGOUT, MESSAGE, GET_CONTENT } from "./types";
import { postContent, getContent } from "../../api/content";
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
      console.log(data);
      dispatch({
        type: MESSAGE.SUCCESS,
        payload: data.message,
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
    }
  };
}

export function getContents(courseArea, courseSubArea, materialCategory) {
  return async function (dispatch) {
    try {
      const { data } = await getContent(
        courseArea,
        courseSubArea,
        materialCategory
      );
      dispatch({
        type: GET_CONTENT,
        // payload: {
        //   [courseArea]: {
        //     [courseSubArea]: { [materialCategory]: data.data },
        //   },
        // },
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
    }
  };
}
