import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({
  shouldOpen,
  leftButtonText,
  rightButtonText,
  handleButtonClicked,
  messageBody1,
  messageBody2,
}) {
  const [open, setOpen] = React.useState(shouldOpen);

  const handleClose = (buttonType) => {
    setOpen(false);
    handleButtonClicked("none");
  };
  const handleDialog = (buttonType) => {
    handleButtonClicked(buttonType);
  };

  return (
    <div>
      <Dialog
        open={shouldOpen || false}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle style={{ fontWeight: "800" }}>{messageBody1}</DialogTitle>
        <DialogContent>
          <DialogContentText style={{ fontWeight: "500" }}>
            {messageBody2}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleDialog("left")} color="primary">
            {leftButtonText}
          </Button>
          <Button onClick={() => handleDialog("right")} color="primary">
            {rightButtonText}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
