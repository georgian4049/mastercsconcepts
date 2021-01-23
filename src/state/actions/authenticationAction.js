import jwt from "jsonwebtoken";
import { LOGOUT, LOGIN_SUCCESS, MESSAGE } from "./types";
import { getAuthentication } from "../../api/authentication";
import Message from "../../utils/message";
import { getRequestOptions } from "./requestActions";

export function logout() {
  return {
    type: LOGOUT,
  };
}

export function login(body) {
  return async function (dispatch) {
    try {
      const data = await getAuthentication(body);
      const token = data.data.access_token;
      localStorage.setItem("token", token);
      const decodedToken = jwt.decode(token);
      const userIdentity = decodedToken.identity;
      dispatch(getRequestOptions());
      dispatch({ type: LOGIN_SUCCESS, payload: userIdentity });
    } catch (error) {
      if (error.response) {
        dispatch({
          type: MESSAGE.ERROR,
          payload: error.response.data.errors.message,
        });
      } else {
        dispatch({
          type: MESSAGE.NETWORK_ERROR,
          payload: Message.en.networkError,
        });
      }
    }
  };
}
