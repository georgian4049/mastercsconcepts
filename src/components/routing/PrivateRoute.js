import { useEffect } from "react";
import { Route, Redirect, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const courseAreaList = ["core", "adv"];

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useSelector((state) => ({
    isAuthenticated: true,
  }));
  let history = useHistory();

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
