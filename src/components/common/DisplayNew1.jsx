import EditorJs from "react-editor-js";
import { EDITOR_JS_TOOLS } from "../../utils/platformConfig";

const DisplayNew = ({ datas }) => {
  return (
    <EditorJs
      data={datas}
      tools={EDITOR_JS_TOOLS}
      // autofocus
      // instanceRef={(instance) => (instanceRef.current = instance)}
      readOnly
    />
  );
};

export default DisplayNew;
