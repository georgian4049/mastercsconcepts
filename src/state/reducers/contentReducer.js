import { SHOW_LOADER, HIDE_LOADER, MESSAGE } from "../actions/types";

const initialState = {
  isLoading: true,
  notification: {
    message: "",
    isOpen: false,
    severity: "",
  },
};

export default function notificationReducer(state = initialState, action) {
  switch (action.type) {
    case MESSAGE.DISPLAY_MESSAGE: {
      return {
        ...state,
        notification: {
          ...state.notification,
          isOpen: true,
        },
      };
    }
    case SHOW_LOADER:
      return {
        ...state,
        isLoading: true,
      };
    case HIDE_LOADER:
      return {
        ...state,
        isLoading: false,
      };
    case MESSAGE.WRONG_DATA:
      return {
        ...state,
        notification: {
          message: action.payload,
          severity: "error",
        },
      };
    case MESSAGE.NETWORK_ERROR:
      return {
        ...state,
        notification: {
          message: action.payload,
          severity: "error",
        },
      };
    case MESSAGE.ERROR:
      return {
        ...state,
        notification: {
          message: action.payload,
          severity: "error",
        },
      };
    case MESSAGE.SUCCESS:
      return {
        ...state,
        notification: {
          message: action.payload,
          severity: "success",
        },
      };
    case MESSAGE.SOMETHING_WENT_WRONG:
      return {
        ...state,
        notification: {
          message: action.payload,
          severity: "error",
        },
      };
    case MESSAGE.ACCESS_DENIED:
      return {
        ...state,
        notification: {
          message: action.payload,
          severity: "error",
        },
      };
    case MESSAGE.WRONG_LOGIN_CREDENTIALS:
      return {
        ...state,
        notification: {
          message: action.payload,
          severity: "error",
        },
      };
    case MESSAGE.CLEAN_ERROR:
      return {
        ...state,
        notification: {
          message: "",
          severity: "",
        },
      };

    default:
      return state;
  }
}
