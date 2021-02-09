import React from "react";
import Theory from "./theory";

const Body = ({ match }) => {
  const { navSelected } = match.params;
  return <div>{navSelected === "theory" ? <Theory /> : ""}</div>;
};

export default Body;
