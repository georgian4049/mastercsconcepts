import { LOGIN_SUCCESS, LOGOUT } from "../actions/types";

const initialState = {
  user: null,
  isAuthenticated: false,
};

export default function authenticationReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.access_token);
      localStorage.setItem("username", action.payload.username);
      localStorage.setItem("name", action.payload.name);
      return {
        ...state,
        isAuthenticated: true,
        username: action.payload.username,
        name: action.payload.name,
      };
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        isAuthenticated: false,
      };
    default:
      return state;
  }
}
