import { LOGIN_SUCCESS, LOGOUT } from "../actions/types";

const initialState = {
  user: null,
  isAuthenticated: false,
};

export default function authenticationReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      const { access_token, username, name, email } = action.payload;
      localStorage.setItem("token", access_token);
      localStorage.setItem("username", username);
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      return {
        ...state,
        isAuthenticated: true,
        username: username,
        name: name,
        email: email,
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
