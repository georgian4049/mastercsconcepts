import { LOGOUT, LOGIN_SUCCESS, MESSAGE } from "./types";
import { getAuthentication, getRefreshToken } from "../../api/authentication";
// import Message from "../../utils/message";

export function logout() {
  return {
    type: LOGOUT,
  };
}

export function login(body) {
  return async function (dispatch) {
    try {
      const { data } = await getAuthentication(body);
      console.log(data);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: data,
      });
    } catch (error) {
      console.log(error);
      if (error.response?.status === 400) {
        dispatch({
          type: MESSAGE.WRONG_LOGIN_CREDENTIALS,
          payload: "Invalid Credential",
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

export function refresh(body) {
  return async function (dispatch) {
    try {
      const { data } = await getRefreshToken(body);
      console.log(data);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: data,
      });
    } catch (error) {
      console.log(error);
      if (error.response?.status === 400) {
        console.log("Token is absent ");
        // dispatch({
        //   type: MESSAGE.NORMAL,
        //   payload: "Please Login to access full content",
        // });
      } else {
        dispatch({
          type: MESSAGE.ERROR,
          payload: "Server Error! Please try again later",
        });
      }
    }
  };
}
