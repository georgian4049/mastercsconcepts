import { SHOW_LOADER, HIDE_LOADER, MESSAGE } from "./types";

export function showLoader() {
  return async function (dispatch) {
    try {
      dispatch({ type: SHOW_LOADER });
    } catch (error) {
      // todo
      console.error("Error");
    }
  };
}
export function hideLoader() {
  return async function (dispatch) {
    try {
      dispatch({ type: HIDE_LOADER });
    } catch (error) {
      // todo
      console.error("Error");
    }
  };
}

export function displayMessage() {
  return async function (dispatch) {
    dispatch({ type: MESSAGE.DISPLAY_MESSAGE });
  };
}

export function message(type, payload) {
  switch (type) {
    case MESSAGE.ERROR:
      return {
        type: MESSAGE.ERROR,
        payload: payload,
      };
    case MESSAGE.NETWORK_ERROR:
      return {
        type: MESSAGE.NETWORK_ERROR,
        payload: payload,
      };
    case MESSAGE.CLEAN_ERROR:
      return {
        type: MESSAGE.CLEAN_ERROR,
      };
    default:
      return;
  }
}
