import { LOGOUT, LOGIN_SUCCESS, MESSAGE } from "./types";
import { getAuthentication } from "../../api/authentication";
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
      dispatch({
        type: LOGIN_SUCCESS,
        payload: data.result.username,
      });
    } catch (error) {
      console.log(error);
      if (error.response.status === 400) {
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
