import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SpeedDial from "@material-ui/lab/SpeedDial";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import CancelOutlinedIcon from "@material-ui/icons/CancelOutlined";
import PublishOutlinedIcon from "@material-ui/icons/PublishOutlined";

const actions = [
  { icon: <PublishOutlinedIcon />, name: "Publish" },
  { icon: <CancelOutlinedIcon />, name: "Cancel" },
];

const useStyles = makeStyles((theme) => ({
  speedDial: {
    position: "fixed",
    top: theme.spacing(10),
    right: theme.spacing(2),
  },
}));

const SpeedDialComponent = ({ optionSelected, handleChange }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleOptionSelected = (val) => {
    handleChange(val);
    handleClose();
  };

  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <div>
      <SpeedDial
        ariaLabel="Option"
        className={classes.speedDial}
        icon={<MoreVertIcon fontSize="large" />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
        direction={"down"}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={() => handleOptionSelected(action.name)}
          />
        ))}
      </SpeedDial>
    </div>
  );
};

export default SpeedDialComponent;
