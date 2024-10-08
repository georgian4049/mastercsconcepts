import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Theory from "./theory";
import { possibleRoutes } from "../utils/applicationConfig";
import { PLATFORM } from "../state/actions/types";
import { getContents } from "../state/actions/content";
import UnderConstruction from "../components/common/UnderConstruction";

const Body = ({ match }) => {
  const dispatch = useDispatch();
  const { materialCategory, courseArea, courseSubArea } = match.params;
  const { content } = useSelector((state) => state.content);
  const history = useHistory();
  useEffect(() => {
    if (!possibleRoutes.includes(materialCategory)) {
      history.replace("/wrong-page");
    }
    dispatch({
      type: PLATFORM.MULTIPLE_VALUES,
      payload: { materialCategory, courseArea, courseSubArea },
    });
    if (content?.[courseArea]?.[courseSubArea]?.[materialCategory]) {
    } else {
      dispatch(getContents(courseArea, courseSubArea, materialCategory));
    }
    /*eslint-disable-next-line*/
  }, [materialCategory, courseArea, courseSubArea]);

  return (
    <div>
      {materialCategory === "theory" || materialCategory === "blogs" ? (
        <Theory />
      ) : (
        <UnderConstruction />
      )}
    </div>
  );
};

export default Body;
