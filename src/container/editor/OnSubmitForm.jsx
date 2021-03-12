import { useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { Typography, TextField } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import Autocomplete from "@material-ui/lab/Autocomplete";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "112ch",
    },
  },
}));

export default function OnsubmitForm({
  shouldOpen,
  handleSubmitButton,
  tag,
  descriptions,
}) {
  const classes = useStyles();
  const handleClose = () => {
    handleSubmitButton(false);
  };
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  //   const [maxWidth, setMaxWidth] = React.useState("sm");
  const [description, setDescription] = useState(descriptions);
  const [tags, setTags] = useState(tag || []);
  const handleKeyDown = (event) => {
    switch (event.key) {
      case ",":
      case " ": {
        event.preventDefault();
        event.stopPropagation();
        if (event.target.value.length > 0) {
          setTags([...tags, event.target.value]);
        }
        break;
      }
      default:
    }
  };
  return (
    <div>
      <Dialog
        fullWidth
        maxWidth={"md"}
        aria-labelledby="customized-dialog-title"
        open={shouldOpen || false}
        fullScreen={fullScreen}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Preview
        </DialogTitle>
        <DialogContent dividers>
          <div className={classes.root}>
            <TextField
              label="Description"
              multiline
              fullWidth
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <Autocomplete
              multiple
              freeSolo
              options={[]}
              value={tags}
              onChange={(event, newValue) => setTags(newValue)}
              filterSelectedOptions
              renderInput={(params) => {
                params.inputProps.onKeyDown = handleKeyDown;
                return (
                  <TextField
                    {...params}
                    label="Tags"
                    required
                    placeholder="Press Enter or Space to add tags"
                    margin="normal"
                    fullWidth
                  />
                );
              }}
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            onClick={() => handleSubmitButton(true, { description, tags })}
            color="secondary"
            disabled={!(description && tags.length)}
          >
            Publish
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
