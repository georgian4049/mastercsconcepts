import React from "react";
import draftToHtml from "draftjs-to-html";

const Display = ({ data }) => {
  return (
    <div
      className="preview"
      dangerouslySetInnerHTML={{
        __html: draftToHtml(data),
      }}
    ></div>
  );
};

export default Display;
