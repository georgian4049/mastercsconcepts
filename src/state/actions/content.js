import { LOGOUT, LOGIN_SUCCESS, MESSAGE } from "./types";
import { postContent } from "../../api/content";
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
