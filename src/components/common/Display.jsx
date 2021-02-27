// import { useState, useEffect } from "react";
// import { convertToHTML } from "draft-convert";
// import draftToMarkdown from "draftjs-to-markdown";
// import DOMPurify from "dompurify";
// import { convertToRaw } from "draft-js";

// const hashConfig = {
//   trigger: "#",
//   separator: " ",
// };
// const config = {
//   blockTypesMapping: {
//     /* mappings */
//   },
//   emptyLineBeforeBlock: true,
// };

// const Display = ({ data }) => {
//   const rawContentState = convertToRaw(data.getCurrentContent());
//   const markup = draftToMarkdown(
//     rawContentState,
//     hashConfig,
//     // customEntityTransform,
//     config
//   );
//   console.log(data);
//   const [displayData, setDisplayData] = useState(null);
//   useEffect(() => {
//     convertContentToHTML();
//   }, [data]);
//   const convertContentToHTML = () => {
//     let currentContentAsHTML = convertToHTML(data.getCurrentContent());
//     setDisplayData(currentContentAsHTML);
//   };
//   const createMarkup = (html) => {
//     return {
//       __html: DOMPurify.sanitize(html),
//     };
//   };
//   console.log(displayData);
//   return (
//     <div>{markup}</div>
// <div
//   className="preview"
//   dangerouslySetInnerHTML={createMarkup(displayData)}
// ></div>
//   );
// };

// export default Display;

import React from "react";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";

const Display = ({ data }) => {
  return (
    <>
      <textarea
        disabled
        value={draftToHtml(convertToRaw(data.getCurrentContent()))}
      />
      <div
        className="preview"
        dangerouslySetInnerHTML={{
          __html: draftToHtml(convertToRaw(data.getCurrentContent())),
        }}
      ></div>
    </>
  );
};

export default Display;
