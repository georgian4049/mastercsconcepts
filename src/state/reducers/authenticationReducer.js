import { LOGIN_SUCCESS, LOGOUT } from "../actions/types";

const initialState = {
  isLoading: true,
  user: null,
  isAuthenticated: false,
};

export default function authenticationReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.access_token);
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
      };
    default:
      return state;
  }
}
