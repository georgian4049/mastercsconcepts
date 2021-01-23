import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useSelector((state) => ({
    isAuthenticated: true,
  }));
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
