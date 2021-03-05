import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import EditorJs from "react-editor-js";
import { EDITOR_JS_TOOLS } from "../../utils/platformConfig";
import SpeedDial from "./SpeedDial";
import { postContents } from "../../state/actions/content";

const NewEditor = () => {
  const instanceRef = useRef(null);

  const { materialCategory, courseArea, courseSubArea } = useSelector(
    (state) => state.platform
  );
  const { username, name } = useSelector((state) => state.authentication);

  const dispatch = useDispatch();

  async function handleSave() {
    const savedData = await instanceRef.current.save();
    console.log(savedData);
    dispatch(
      postContents({
        authorUsername: username,
        courseArea: courseArea,
        courseSubArea: courseSubArea["name"],
        materialCategory: materialCategory,
        contentData: savedData,
        title: "Trya",
        tags: "",
        datePublished: new Date(),
        view: 0,
        like: 0,
        minRead: 0,
      })
    );
  }

  //readOnly
  return (
    <div>
      <button onClick={handleSave}> Click </button>
      <SpeedDial />
      <EditorJs
        tools={EDITOR_JS_TOOLS}
        autofocus
        instanceRef={(instance) => (instanceRef.current = instance)}
      />
    </div>
  );
};

export default NewEditor;
