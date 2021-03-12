import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

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

export default function OnsubmitForm({ shouldOpen, handleSubmitButton }) {
  const handleClose = () => {
    handleSubmitButton(false);
  };
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  //   const [maxWidth, setMaxWidth] = React.useState("sm");

  return (
    <div>
      <Dialog
        fullWidth
        maxWidth={"lg"}
        aria-labelledby="customized-dialog-title"
        open={shouldOpen || false}
        fullScreen={fullScreen}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Preview
        </DialogTitle>
        <DialogContent dividers></DialogContent>
        <DialogActions>
          <Button
            autoFocus
            onClick={() => handleSubmitButton(true)}
            color="secondary"
          >
            Publish
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
