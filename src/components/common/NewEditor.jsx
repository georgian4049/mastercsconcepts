import { useRef, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import EditorJs from "react-editor-js";
import { InputBase, IconButton, Tooltip, makeStyles } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import { EDITOR_JS_TOOLS } from "../../utils/platformConfig";
import SpeedDial from "./SpeedDial";
import { postContents } from "../../state/actions/content";
import Dialog from "./Dialog";
import { useHistory } from "react-router";
import Message from "../../utils/message";
import "./editor.css";

const useStyles = makeStyles((theme) => ({
  edit: {
    position: "fixed",
    top: theme.spacing(10),
    right: theme.spacing(2),
  },
}));

const NewEditor = ({ data, existing, readOnly }) => {
  const classes = useStyles();
  const instanceRef = useRef(null);
  const history = useHistory();
  const { materialCategory, courseArea, courseSubArea } = useSelector(
    (state) => state.platform
  );

  const { username, isAuthenticated } = useSelector(
    (state) => state.authentication
  );
  const [edit, setEdit] = useState(false);
  const [state, setState] = useState({
    courseArea: "",
    courseSubArea: "",
    materialCategory: "",
    authorUsername: "",
    title: "",
    tags: "",
    datePublished: new Date(),
    view: 0,
    like: 0,
    minRead: 0,
    contentData: {},
  });

  useEffect(() => {
    if (existing) {
      setState(data);
    }
  }, [existing]);
  console.log(state);

  const dispatch = useDispatch();

  async function handleSave() {
    const savedData = await instanceRef.current.save();
    dispatch(
      postContents({
        ...state,
        authorUsername: username,
        courseArea: courseArea,
        courseSubArea: courseSubArea["name"],
        materialCategory: materialCategory,
        contentData: savedData,
      })
    );
  }
  const handleChange = (buttonClicked) => {
    if (buttonClicked === "Cancel") {
      setState({ ...state, cancel: true });
    } else if (buttonClicked === "Publish") {
      handleSave();
      //
    }
    setEdit(true);
  };

  const handleCancel = (buttonType) => {
    if (buttonType === "left") {
      history.goBack();
    } else {
      setState({ ...state, cancel: false });
    }
  };

  //readOnly
  return (
    <div>
      <div style={{ width: "80%", margin: "auto" }}>
        <InputBase
          autoFocus
          fullWidth
          onChange={(e) => setState({ ...state, title: e.target.value })}
          value={state.title}
          placeholder="Enter title here..."
          inputProps={{ "aria-label": "naked" }}
          style={{
            fontWeight: "bold",
            fontSize: "25px",
          }}
        />
      </div>

      {data?.contentData ? (
        <>
          {isAuthenticated && username === data.authorUsername && !edit && (
            <div style={{ display: "flex" }}>
              <Tooltip title="Edit Content">
                <IconButton
                  aria-label="delete"
                  className={classes.edit}
                  onClick={() => setEdit(!edit)}
                >
                  <EditIcon fontSize="large" />
                </IconButton>
              </Tooltip>
            </div>
          )}
          <EditorJs
            tools={EDITOR_JS_TOOLS}
            autofocus
            data={data.contentData}
            placeholder="Enter your content here"
            instanceRef={(instance) => (instanceRef.current = instance)}
            readOnly={!edit}
          />
        </>
      ) : (
        <EditorJs
          tools={EDITOR_JS_TOOLS}
          autofocus
          placeholder="Enter your content here"
          instanceRef={(instance) => (instanceRef.current = instance)}
        />
      )}
      {(!existing || edit) && <SpeedDial handleChange={handleChange} />}

      <Dialog
        shouldOpen={state.cancel}
        handleButtonClicked={handleCancel}
        messageBody1={Message.en.editor.cancel.messageBody1}
        messageBody2={Message.en.editor.cancel.messageBody2}
        leftButtonText="Yes"
        rightButtonText="No"
      />
    </div>
  );
};

export default NewEditor;
