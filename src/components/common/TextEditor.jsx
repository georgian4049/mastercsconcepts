import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { EditorState, convertToRaw, convertFromRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import Dialog from "./Dialog";
import Message from "../../utils/message";
import { postContents } from "../../state/actions/content";

import "../css/Editor.css";
import {
  Button,
  TextField,
  Grid,
  FormControl,
  Input,
  InputLabel,
  InputAdornment,
  makeStyles,
} from "@material-ui/core";
import clsx from "clsx";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { ErrorSharp } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    // width: "100%",
    marginLeft: "auto",
    "& > *": {
      margin: theme.spacing(1),
      marginTop: theme.spacing(0),
    },
  },
}));

const MetaComponent = ({
  handleMetaComponent,
  title,
  tagsValue,
  minRead,
  errors,
}) => {
  console.log(errors);
  return (
    <div style={{ margin: "auto", width: "100%" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={5} lg={5}>
          <TextField
            id="title"
            label="Title"
            fullWidth
            error={errors.title}
            value={title}
            onChange={(e) => handleMetaComponent("title", e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={5} lg={5}>
          <Autocomplete
            multiple
            val={tagsValue}
            onChange={(e, v) => handleMetaComponent("tags", v)}
            id="tags-standard"
            fullWidth={false}
            limitTags={2}
            options={tags}
            getOptionLabel={(option) => option}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="standard"
                label="Tags"
                placeholder="Tags"
                error={errors.tags}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={2} lg={2}>
          <FormControl className={clsx("4px", "4ch")}>
            <InputLabel htmlFor="standard-adornment-password">
              Min Read Time
            </InputLabel>
            <Input
              id="minRead"
              value={minRead}
              onChange={(e) => handleMetaComponent("minRead", e.target.value)}
              endAdornment={<InputAdornment position="end">min</InputAdornment>}
            />
          </FormControl>
        </Grid>
      </Grid>
    </div>
  );
};

const ActionButtons = ({ handleSave, handlePublish }) => {
  const classes = useStyles();
  const history = useHistory();
  const [buttonClicked, setButtonClicked] = useState("");
  const handleButton = (val) => {
    setButtonClicked(val);
  };
  const handleCancel = (val) => {
    setButtonClicked("");
    if (val === "left") {
      history.goBack();
    } else {
      handleSave();
    }
  };

  return (
    <div className={classes.root}>
      <Button variant="contained" onClick={() => handleButton("cancel")}>
        Cancel
      </Button>
      <Button variant="contained" color="primary" onClick={handleSave}>
        Save
      </Button>
      <Button variant="contained" color="secondary" onClick={handlePublish}>
        Publish
      </Button>
      {buttonClicked === "cancel" ? (
        <Dialog
          shouldOpen={buttonClicked === "cancel"}
          leftButtonText="Cancel"
          rightButtonText="Save"
          messageBody1={Message.en.editor.cancel.messageBody1}
          messageBody2={Message.en.editor.cancel.messageBody2}
          handleButtonClicked={handleCancel}
        />
      ) : (
        ""
      )}
    </div>
  );
};

const tags = ["Machine Learning", "Pandas", "Matplotlib"];

const TextEditor = ({ data, edit }) => {
  const [errors, setErrors] = useState({
    title: false,
    tags: false,
    content: false,
  });
  const { materialCategory, courseArea, courseSubArea } = useSelector(
    (state) => state.platform
  );
  const { username, name } = useSelector((state) => state.authentication);

  const dispatch = useDispatch();

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
    content: {},
  });
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  useEffect(() => {
    if (edit) {
      setState({ data });
      // setState(EditorState.createWithContent(convertFromRaw(data)));
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

  const handleMetaComponent = (name, value) => {
    setState({ ...state, [name]: value });
    if (name === "title" || name === "tags" || name === "content") {
      if (!value) {
        setErrors({ ...errors, [name]: true });
      } else {
        setErrors({ ...errors, [name]: false });
      }
    }
  };

  const checkIfMandatoryValuesExist = () => {
    if (state.title && state.tags.length) {
      return true;
    }
    if (!state.title) {
      setErrors({ ...errors, title: true });
    }
    if (state.tags?.length === 0) {
      setErrors({ ...errors, tags: true });
    }
    if (!state.content) {
      setErrors({ ...errors, content: true });
    }
    if (state.title) {
      setErrors({ ...errors, title: false });
    }
    if (state.tags?.length > 0) {
      setErrors({ ...errors, tags: false });
    }
    if (state.content) {
      setErrors({ ...errors, content: false });
    }
    return false;
  };

  const handleSave = () => {
    // let allValues =
    if (checkIfMandatoryValuesExist()) {
    }
  };

  const handlePublish = () => {
    if (checkIfMandatoryValuesExist()) {
      dispatch(
        postContents({
          ...state,
          authorUsername: username,
          courseArea: courseArea,
          courseSubArea: courseSubArea["name"],
          materialCategory: materialCategory,
          content: convertToRaw(editorState.getCurrentContent()),
        })
      );
    }
  };

  return (
    <>
      <Editor
        toolbarClassName="rdw-storybook-toolbar"
        wrapperClassName="rdw-storybook-wrapper"
        editorClassName="rdw-storybook-editor"
        placeholder="Add your content here!! :)"
        editorState={editorState}
        hashtag={{
          separator: " ",
          trigger: "#",
        }}
        onEditorStateChange={onEditorStateChange}
        toolbar={{
          // inline: { inDropdown: true },
          // list: { inDropdown: true },
          // textAlign: { inDropdown: true },
          // link: { inDropdown: true },
          // history: { inDropdown: true },
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
          },
        }}
        toolbarCustomButtons={[
          <ActionButtons
            handleSave={handleSave}
            handlePublish={handlePublish}
          />,
          <MetaComponent
            title={state.title}
            tagsValue={state.tags}
            minRead={state.minRead}
            handleMetaComponent={handleMetaComponent}
            errors={errors}
          />,
        ]}
      />
    </>
  );
};

export default TextEditor;
