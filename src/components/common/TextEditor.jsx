import { useState, useEffect } from "react";
import { EditorState, convertToRaw, convertFromRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import Display from "./Display";
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

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      marginTop: theme.spacing(0),
    },
  },
}));

const MetaComponent = () => {
  return (
    <div style={{ margin: "auto", width: "100%" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={5} lg={5}>
          <TextField id="title" label="Title" fullWidth />
        </Grid>
        <Grid item xs={12} sm={12} md={5} lg={5}>
          <Autocomplete
            multiple
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
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={2} lg={2}>
          <FormControl className={clsx("4px", "4ch")}>
            <InputLabel htmlFor="standard-adornment-password">
              Password
            </InputLabel>
            <Input
              id="standard-adornment-password"
              // type={values.showPassword ? "text" : "password"}
              // value={values.password}
              // onChange={handleChange("password")}
              endAdornment={<InputAdornment position="end">min</InputAdornment>}
            />
          </FormControl>
        </Grid>
      </Grid>
    </div>
  );
};

const ActionButtons = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Button variant="contained">Cancel</Button>
      <Button variant="contained" color="primary">
        Save
      </Button>
      <Button variant="contained" color="secondary">
        Publish
      </Button>
    </div>
  );
};

const tags = ["Machine Learning", "Pandas", "Matplotlib"];
const TextEditor = ({ data, edit }) => {
  const [state, setState] = useState({
    title: "",
  });
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
          },
        }}
        toolbarCustomButtons={[<ActionButtons />, <MetaComponent />]}
      />
    </>
  );
};

export default TextEditor;
