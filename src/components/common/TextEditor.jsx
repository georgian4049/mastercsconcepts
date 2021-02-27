import { useState, useEffect } from "react";
import { EditorState, convertToRaw, convertFromRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import Display from "./Display";

const TextEditor = ({ data, edit }) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  useEffect(() => {
    if (edit) {
      setEditorState(EditorState.createWithContent(convertFromRaw(data)));
    }
  }, []);

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

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };
  return (
    <>
      <div
        style={{
          border: "1px solid gray",
          display: "block",
          minHeight: "15em",
          padding: "10px",
        }}
      >
        <Editor
          editorState={editorState}
          hashtag={{
            separator: " ",
            trigger: "#",
          }}
          onEditorStateChange={onEditorStateChange}
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
              inputAccept: "image/gif,image/jpeg,image/jpg,image/png,image/svg",
              alt: { present: false, mandatory: false },
              defaultSize: {
                height: "auto",
                width: "auto",
              },
              alt: { present: true, mandatory: false },
            },
          }}
        />
      </div>
      <div>
        <Display data={convertToRaw(editorState.getCurrentContent())} />
      </div>
    </>
  );
};

export default TextEditor;
