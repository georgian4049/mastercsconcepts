import { useRef, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles, IconButton, Tooltip } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import EditorJs from "react-editor-js";
import { EDITOR_JS_TOOLS } from "../../utils/platformConfig";
import SpeedDial from "./SpeedDial";
import { postContents } from "../../state/actions/content";
import Display from "./Display";
import DisplayNew1 from "./DisplayNew1";
import BackButton from "./BackButton";
import EditIcon from "@material-ui/icons/Edit";

const useStyles = makeStyles((theme) => ({
  //   root: {
  //     width: "100%",
  //     position: "relative",
  //   },
  header: {
    position: "fixed",
    width: "85%",
    height: "50px",
    zIndex: "99",
    backgroundColor: "#fff",
    padding: "5px",
  },
  button: {
    margin: theme.spacing(1),
    position: "fixed",
    zIndex: "1",
  },
  articleContent: {
    maxWidth: "100%",
    position: "relative",
    top: "50px",
    padding: "15px",
  },
}));

const DisplayNew = ({ match }) => {
  const classes = useStyles();
  const { materialCategory, courseArea, courseSubArea, topicId } = match.params;
  const content = useSelector((state) => state.content);
  const [edit, setEdit] = useState(false);
  const { isAuthenticated, username, name } = useSelector(
    (state) => state.authentication
  );
  const instanceRef = useRef(null);
  const [data, setData] = useState({});

  useEffect(() => {
    if (content && content[courseArea]?.[courseSubArea]?.[materialCategory]) {
      const temp = content[courseArea][courseSubArea][materialCategory].find(
        (i) => i["_id"] === topicId
      );
      console.log("temp", temp);
      console.log("content", temp.content);
      setData(temp);
    }
  }, [courseArea, courseSubArea, materialCategory, topicId, content]);

  const dispatch = useDispatch();

  async function handleSave() {
    const savedData = await instanceRef.current.save();
    console.log(savedData);
    dispatch(
      postContents({
        ...data,
        content: savedData,
      })
    );
  }

  return (
    <>
      <BackButton />
      <div className={classes.articleContent}>
        {data?.contentData ? (
          <>
            {isAuthenticated && username === data.username && (
              <div style={{ display: "flex" }}>
                <Tooltip title="Edit Content">
                  <IconButton
                    aria-label="delete"
                    style={{ marginLeft: "auto" }}
                    onClick={() => setEdit(!edit)}
                  >
                    <EditIcon fontSize="large" />
                  </IconButton>
                </Tooltip>
              </div>
            )}
            <EditorJs
              data={data.contentData}
              tools={EDITOR_JS_TOOLS}
              autofocus
              instanceRef={(instance) => (instanceRef.current = instance)}
              readOnly={!edit}
            />
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default DisplayNew;
