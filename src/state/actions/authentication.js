import {
  LOGOUT,
  LOGIN_SUCCESS,
  MESSAGE,
  HIDE_LOADER,
  SHOW_LOADER,
} from "./types";
import {
  getAuthentication,
  getRefreshToken,
  registerUser,
} from "../../api/authentication";
// import Message from "../../utils/message";

export function logout() {
  return {
    type: LOGOUT,
  };
}

export function login(body) {
  return async function (dispatch) {
    try {
      dispatch({ type: SHOW_LOADER });
      const { data } = await getAuthentication(body);
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
    } finally {
      dispatch({ type: HIDE_LOADER });
    }
  };
}

export function register(body) {
  return async function (dispatch) {
    try {
      dispatch({ type: SHOW_LOADER });
      const { data } = await registerUser(body);
      dispatch({
        type: MESSAGE.SUCCESS,
        payload: "Registered Successfully!",
      });
      dispatch({
        type: LOGIN_SUCCESS,
        payload: data,
      });
    } catch (error) {
      console.log(error);
      if (error.response?.status === 400) {
        dispatch({
          type: MESSAGE.WRONG_LOGIN_CREDENTIALS,
          payload: "This email address is already registered with us",
        });
      } else if (error.response?.status === 401) {
        dispatch({
          type: MESSAGE.WRONG_LOGIN_CREDENTIALS,
          payload: "Username Taken",
        });
      } else {
        dispatch({
          type: MESSAGE.ERROR,
          payload: "Server Error! Please try again later",
        });
      }
    } finally {
      dispatch({ type: HIDE_LOADER });
    }
  };
}

export function refresh(body) {
  return async function (dispatch) {
    try {
      dispatch({ type: SHOW_LOADER });
      const { data } = await getRefreshToken(body);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: data,
      });
      dispatch({ type: HIDE_LOADER });
    } catch (error) {
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
    } finally {
      dispatch({ type: HIDE_LOADER });
    }
  };
}
