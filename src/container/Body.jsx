import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Theory from "./theory";
import { possibleRoutes } from "../utils/applicationConfig";
import { PLATFORM } from "../state/actions/types";

const Body = ({ match }) => {
  const dispatch = useDispatch();
  const { routeSelected, courseArea, courseSubArea } = match.params;
  const history = useHistory();
  useEffect(() => {
    if (!possibleRoutes.includes(routeSelected)) {
      history.replace("/wrong-page");
    }
    dispatch({
      type: PLATFORM.MATERIAL_CATEGORY,
      payload: routeSelected,
    });
  }, []);

  return <div>{routeSelected === "theory" ? <Theory /> : ""}</div>;
};

export default Body;
