import { useRef, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import EditorJs from "react-editor-js";
import { InputBase, IconButton, Tooltip, makeStyles } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { EDITOR_JS_TOOLS } from "../../utils/platformConfig";
import SpeedDial from "./SpeedDial";
import { postContents } from "../../state/actions/content";
import OnSubmitForm from "./OnSubmitForm";
import Dialog from "./Dialog";
import { useHistory } from "react-router";
import Message from "../../utils/message";
import { MESSAGE } from "../../state/actions/types";
import { deleteContent } from "../../api/content";
import "./editor.css";
import Bookmark from "../../components/common/Bookmark";
import Like from "../../components/common/Like";

const useStyles = makeStyles((theme) => ({
  edit: {
    position: "fixed",
    top: theme.spacing(10),
    right: theme.spacing(2),
    zIndex: 2,
  },
  delete: {
    position: "fixed",
    top: theme.spacing(18),
    right: theme.spacing(2),
    zIndex: 2,
  },
  like: {
    position: "fixed",
    top: "50vh",
    right: theme.spacing(2),
    zIndex: 2,
  },
  bookmark: {
    position: "fixed",
    top: "42vh",
    right: theme.spacing(2),
    zIndex: 2,
  },
}));

const Editor = ({ data, existing }) => {
  const classes = useStyles();
  const instanceRef = useRef(null);
  const history = useHistory();
  const { materialCategory, courseArea, courseSubArea } = useSelector(
    (state) => state.platform
  );

  const { username, isAuthenticated, name } = useSelector(
    (state) => state.authentication
  );
  const [edit, setEdit] = useState(false);

  const [buttonState, setButtonState] = useState({
    cancel: false,
    submit: false,
    save: false,
    delete: false,
  });

  const [state, setState] = useState({
    courseArea: "",
    courseSubArea: "",
    materialCategory: "",
    authorUsername: "",
    description: "",
    name: "",
    title: "",
    tags: [],
    datePublished: new Date(),
    view: 0,
    like: 0,
    minRead: 0,
    contentData: {},
    bookmarkedBy: [],
  });

  useEffect(() => {
    if (existing) {
      setState(data);
    }
    /*eslint-disable-next-line*/
  }, [existing]);

  const dispatch = useDispatch();

  async function handleSave(descTags) {
    const savedData = await instanceRef.current.save();
    dispatch(
      postContents({
        ...state,
        ...descTags,
        authorUsername: username,
        authorName: name,
        courseArea: courseArea,
        courseSubArea: courseSubArea,
        materialCategory: materialCategory,
        contentData: savedData,
        bookmarkedBy: [],
      })
    );
  }
  const handleChange = (buttonClicked) => {
    if (buttonClicked === "Cancel") {
      // setState({ ...state, cancel: true });
      setButtonState({ ...buttonState, cancel: true });
    } else if (buttonClicked === "Publish") {
      setButtonState({ ...buttonState, submit: true });
      // handleSave();
    }
    setEdit(true);
  };

  const handleDelete = (buttonType) => {
    if (buttonType === "right") {
      deleteContents();
    } else {
      setButtonState({ ...buttonState, delete: false });
    }
  };

  const handleCancel = (buttonType) => {
    if (buttonType === "left") {
      history.goBack();
    } else {
      setButtonState({ ...buttonState, cancel: false });
    }
  };

  const handleSubmitButton = (shouldSubmit, obj) => {
    if (shouldSubmit) {
      handleSave(obj);
    }
    setButtonState({ ...buttonState, submit: false });
  };

  async function deleteContents() {
    try {
      await deleteContent(state["_id"]);
      dispatch({
        type: MESSAGE.SUCCESS,
        payload: "Deleted Successfully",
      });
      setButtonState({ ...buttonState, delete: false });
      history.replace(`/${courseArea}/${courseSubArea}/${materialCategory}`);
    } catch (error) {
      console.log(error);
      if (error.response?.status === 400) {
        history.goBack();
        dispatch({
          type: MESSAGE.SOMETHING_WENT_WRONG,
          payload: "Something went wrong while deleting",
        });
      } else if (error.response?.status === 401) {
        dispatch({
          type: MESSAGE.WRONG_LOGIN_CREDENTIALS,
          payload: "Username Taken",
        });
      } else {
        dispatch({
          type: MESSAGE.ERROR,
          payload: "Server Error! Please try again later",
        });
      }
    }
  }

  return (
    <div>
      <div style={{ width: "80%", margin: "auto" }}>
        <InputBase
          autoFocus
          fullWidth
          disabled={existing && !edit}
          onChange={(e) => setState({ ...state, title: e.target.value })}
          value={state.title}
          placeholder="Enter title here..."
          inputProps={{ "aria-label": "naked" }}
          style={{
            fontWeight: "bold",
            fontSize: "25px",
            color: "#000",
          }}
        />
      </div>

      {data?.contentData ? (
        <>
          {isAuthenticated && username === data.authorUsername && !edit && (
            <div style={{ display: "flex" }}>
              <Tooltip title="Edit Content">
                <IconButton
                  aria-label="Edit"
                  className={classes.edit}
                  onClick={() => setEdit(!edit)}
                >
                  <EditIcon fontSize="large" color="primary" />
                </IconButton>
              </Tooltip>
              <Tooltip title="Delete Content">
                <IconButton
                  aria-label="delete"
                  className={classes.delete}
                  onClick={() =>
                    setButtonState({ ...buttonState, delete: true })
                  }
                >
                  <DeleteForeverIcon fontSize="large" color="error" />
                </IconButton>
              </Tooltip>
            </div>
          )}
          {isAuthenticated && (
            <div style={{ display: "flex" }}>
              <div className={classes.bookmark}>
                <Bookmark
                  courseArea={courseArea}
                  courseSubArea={courseSubArea}
                  materialCategory={materialCategory}
                  _id={state["_id"]}
                  bookmarkedBy={state["bookmarkedBy"]}
                  iconSize="large"
                />
              </div>
              <div className={classes.like}>
                <Like
                  courseArea={courseArea}
                  courseSubArea={courseSubArea}
                  materialCategory={materialCategory}
                  _id={state["_id"]}
                  bookmarkedBy={state["bookmarkedBy"]}
                  iconSize="large"
                />
              </div>
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
      {buttonState["cancel"] && (
        <Dialog
          shouldOpen={buttonState["cancel"]}
          handleButtonClicked={handleCancel}
          messageBody1={Message.en.editor.cancel.messageBody1}
          messageBody2={Message.en.editor.cancel.messageBody2}
          leftButtonText="Yes"
          rightButtonText="No"
        />
      )}
      {buttonState["delete"] && (
        <Dialog
          shouldOpen={buttonState["delete"]}
          handleButtonClicked={handleDelete}
          messageBody1={Message.en.editor.cancel.messageBody1}
          messageBody2={Message.en.editor.cancel.messageBody2}
          leftButtonText="Cancel"
          rightButtonText="Delete"
        />
      )}
      {buttonState["submit"] && (
        <OnSubmitForm
          shouldOpen={buttonState["submit"]}
          handleSubmitButton={handleSubmitButton}
          descriptions={state.description}
          tag={state.tags}
        />
      )}
    </div>
  );
};

export default Editor;
