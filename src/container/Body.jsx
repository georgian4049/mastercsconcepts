import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Theory from "./theory";
import { possibleRoutes } from "../utils/applicationConfig";

const Body = ({ match }) => {
  const { routeSelected, courseArea, courseSubArea } = match.params;
  const history = useHistory();
  useEffect(() => {
    if (!possibleRoutes.includes(routeSelected)) {
      history.replace("/wrong-page");
    }
  }, []);

  return <div>{routeSelected === "theory" ? <Theory /> : ""}</div>;
};

export default Body;
