import React, { Component } from "react";
import { render } from "react-dom";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import Display from "./Display";

function uploadImageCallBack(file) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://api.imgur.com/3/image");
    xhr.setRequestHeader("Authorization", "Client-ID XXXXX");
    const data = new FormData();
    data.append("image", file);
    xhr.send(data);
    xhr.addEventListener("load", () => {
      const response = JSON.parse(xhr.responseText);
      resolve(response);
    });
    xhr.addEventListener("error", () => {
      const error = JSON.parse(xhr.responseText);
      reject(error);
    });
  });
}

const uploadCallback = (file) => {
  return new Promise((resolve, reject) => {
    if (file) {
      let reader = new FileReader();
      reader.onload = (e) => {
        resolve({ data: { link: e.target.result } });
      };
      reader.readAsDataURL(file);
    }
  });
};

class EditorContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
    };
  }

  onEditorStateChange: Function = (editorState) => {
    console.log(editorState);
    console.log(convertToRaw(editorState.getCurrentContent()));
    this.setState({
      editorState,
    });
  };

  render() {
    const { editorState } = this.state;
    return (
      <>
        <div className="editor">
          <Editor
            editorState={editorState}
            onEditorStateChange={this.onEditorStateChange}
            toolbar={{
              inline: { inDropdown: true },
              list: { inDropdown: true },
              textAlign: { inDropdown: true },
              link: { inDropdown: true },
              history: { inDropdown: true },
              image: {
                uploadEnabled: true,
                uploadCallback: uploadCallback,
                previewImage: true,
                inputAccept:
                  "image/gif,image/jpeg,image/jpg,image/png,image/svg",
                alt: { present: false, mandatory: false },
                defaultSize: {
                  height: "auto",
                  width: "auto",
                },
                alt: { present: true, mandatory: true },
                caption: { present: true, mandatory: true },
              },
              // image: {
              //   uploadCallback: uploadImageCallBack,
              //   alt: { present: true, mandatory: true },
              // },
            }}
          />
        </div>
        <div>
          <Display data={editorState} />
        </div>
      </>
    );
  }
}
export default EditorContainer;

// import React, { useState } from "react";
// import { EditorState } from "draft-js";
// import { Editor } from "react-draft-wysiwyg";
// import { convertToHTML } from "draft-convert";
// import DOMPurify from "dompurify";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// import "../css/Editor.css";
// const EditorBlock = () => {
//   const [editorState, setEditorState] = useState(() =>
//     EditorState.createEmpty()
//   );
//   const [convertedContent, setConvertedContent] = useState(null);
//   const handleEditorChange = (state) => {
//     setEditorState(state);
//     convertContentToHTML();
//     console.log(editorState);
//   };
// const convertContentToHTML = () => {
//   let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
//   setConvertedContent(currentContentAsHTML);
// };
//   const createMarkup = (html) => {
//     return {
//       __html: DOMPurify.sanitize(html),
//     };
//   };
//   return (
//     <div className="Editor">
//       <header className="Editor-header">Create Your Content</header>
//       <Editor
//         editorState={editorState}
//         onEditorStateChange={handleEditorChange}
//         wrapperClassName="wrapper-class"
//         editorClassName="editor-class"
//         toolbarClassName="toolbar-class"
//         // toolbar={{
//         //   inline: { inDropdown: true },
//         //   list: { inDropdown: true },
//         //   textAlign: { inDropdown: true },
//         //   link: { inDropdown: true },
//         //   history: { inDropdown: true },
//         //   image: {
//         //     // uploadCallback: uploadImageCallBack,
//         //     alt: { present: true, mandatory: true },
//         //   },
//         // }}
//       />
// <div
//   className="preview"
//   dangerouslySetInnerHTML={createMarkup(convertedContent)}
// ></div>
//     </div>
//   );
// };
// export default EditorBlock;

// import React, { Component } from "react";
// import { EditorState, convertToRaw, ContentState } from "draft-js";
// import { Editor } from "react-draft-wysiwyg";
// import draftToHtml from "draftjs-to-html";
// import htmlToDraft from "html-to-draftjs";

// class EditorConvertToHTML extends Component {
//   constructor(props) {
//     super(props);
//     const html = "<p>Hey this <strong>editor</strong> rocks 😀</p>";
//     const contentBlock = htmlToDraft(html);
//     if (contentBlock) {
//       const contentState = ContentState.createFromBlockArray(
//         contentBlock.contentBlocks
//       );
//       const editorState = EditorState.createWithContent(contentState);
//       this.state = {
//         editorState,
//       };
//     }
//   }

//   onEditorStateChange: Function = (editorState) => {
//     this.setState({
//       editorState,
//     });
//   };

//   render() {
//     const { editorState } = this.state;
//     return (
//       <div>
//         <Editor
//           editorState={editorState}
//           wrapperClassName="demo-wrapper"
//           editorClassName="demo-editor"
//           onEditorStateChange={this.onEditorStateChange}
//         />
//         <textarea
//           disabled
//           value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
//         />
//       </div>
//     );
//   }
// }

// export default EditorConvertToHTML;
