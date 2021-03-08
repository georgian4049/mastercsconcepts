import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import draftToHtml from "draftjs-to-html";

const Display = ({ match }) => {
  const { materialCategory, courseArea, courseSubArea, topicId } = match.params;
  const content = useSelector((state) => state.content);
  const [data, setData] = useState();

  useEffect(() => {
    if (content && content[courseArea]?.[courseSubArea]?.[materialCategory]) {
      const temp = content[courseArea][courseSubArea][materialCategory].find(
        (i) => i["_id"] === topicId
      );
      setData(temp.content);
    }
  }, [courseArea, courseSubArea, materialCategory, topicId, content]);

  return (
    <>
      {data && (
        <div
          className="preview"
          dangerouslySetInnerHTML={{
            __html: draftToHtml(data),
          }}
        ></div>
      )}
    </>
  );
};

export default Display;
