import { useEffect } from "react";
import { Route, Redirect, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { MULTIPLE_VALUES } from "../../state/actions/types";
import { courseList } from "../../utils/mock";
import jwt from "jsonwebtoken";
import { LOGIN_SUCCESS } from "../../state/actions/types";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useSelector((state) => ({
    // isAuthenticated: state.authentication.isAuthenticated,
    isAuthenticated: true,
  }));
  let history = useHistory();
  const dispatch = useDispatch();

  // useEffect(() => {
  //   intialCall();
  // }, []);
  // const intialCall = () => {
  //   const token = localStorage.getItem("token") || null;
  //   if (
  //     token !== null &&
  //     token !== undefined &&
  //     jwt.decode(token).exp < Date.now() / 1000
  //   ) {
  //     const username = localStorage.getItem("username");
  //     const name = localStorage.getItem("name");
  //     //need to work on Refresh token
  //     dispatch({
  //       type: LOGIN_SUCCESS,
  //       payload: { token, username, name },
  //     });
  //   } else {
  //     history.replace("/login");
  //   }
  // };

  useEffect(() => {
    const currentUrl = history.location.pathname.split("/");
    if (
      courseList[currentUrl[1]] &&
      courseList[currentUrl[1]].find((i) => i.name === currentUrl[2])
    ) {
      const index = courseList[currentUrl[1]].findIndex(
        (i) => i.name === currentUrl[2]
      );
      dispatch({
        type: MULTIPLE_VALUES,
        payload: {
          courseArea: currentUrl[1],
          courseSubArea: courseList[currentUrl[1]][index],
          materialCategory: currentUrl[3],
        },
      });
    } else {
      // history.replace("/wrong-page");
    }
  }, []);

  return (
    <Route
      {...rest}
      render={(props) =>
        // isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
        isAuthenticated ? <Component {...props} /> : <Redirect to="/home" />
      }
    />
  );
};

export default PrivateRoute;
