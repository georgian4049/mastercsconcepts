import { useEffect } from "react";
import { Route, Redirect, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { MULTIPLE_VALUES } from "../../state/actions/types";
import { courseList } from "../../utils/mock";
import { refresh } from "../../state/actions/authentication";
import { getContents } from "../../state/actions/content";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useSelector((state) => ({
    // isAuthenticated: state.authentication.isAuthenticated,
    isAuthenticated: true,
  }));
  let history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    intialCall();
  }, []);
  const intialCall = () => {
    const token = localStorage.getItem("token") || null;
    if (token) {
      dispatch(refresh({ token }));
    } else {
      // history.replace("/login");
    }
  };

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
      dispatch(
        getContents(
          currentUrl[1],
          courseList[currentUrl[1]][index]["name"],
          currentUrl[3]
        )
      );
    } else {
      // history.replace("/wrong-page");
    }
    /*eslint-disable-next-line*/
  }, []);

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/home" />
      }
    />
  );
};

export default PrivateRoute;
