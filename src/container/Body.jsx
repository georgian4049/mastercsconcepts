import React from "react";
import Theory from "./theory";

const possibleRoutes = ["theory"];

const Body = ({ match }) => {
  const { routeSelected, courseArea, courseSubArea } = match.params;

  return <div>{routeSelected === "theory" ? <Theory /> : ""}</div>;
};

export default Body;
