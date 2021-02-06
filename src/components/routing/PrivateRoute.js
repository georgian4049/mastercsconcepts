import { useEffect } from "react";
import { Route, Redirect, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { MULTIPLE_VALUES } from "../../state/actions/types";
import { courseList } from "../../utils/mock";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useSelector((state) => ({
    isAuthenticated: true,
  }));
  let history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    const courseDetails = history.location.pathname.split("/");
    if (
      courseList[courseDetails[1]] &&
      courseList[courseDetails[1]].find((i) => i.name === courseDetails[2])
    ) {
      const index = courseList[courseDetails[1]].findIndex(
        (i) => i.name === courseDetails[2]
      );
      dispatch({
        type: MULTIPLE_VALUES,
        payload: {
          courseArea: courseDetails[1],
          courseSubArea: courseList[courseDetails[1]][index],
          sideBarOption: courseDetails[3],
        },
      });
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
