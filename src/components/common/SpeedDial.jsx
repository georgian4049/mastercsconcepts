import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SpeedDial from "@material-ui/lab/SpeedDial";
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";
import SubtitlesIcon from "@material-ui/icons/Subtitles";
import DescriptionIcon from "@material-ui/icons/Description";
import SubjectSharpIcon from "@material-ui/icons/SubjectSharp";

const actions = [
  { icon: <SubtitlesIcon />, name: "Subtitles" },
  { icon: <DescriptionIcon />, name: "Description" },
  { icon: <SubjectSharpIcon />, name: "SubjectSharp" },
];

const useStyles = makeStyles((theme) => ({
  //   root: {
  //     transform: "translateZ(0px)",
  //     flexGrow: 1,
  //   },
  //   exampleWrapper: {
  //     position: "relative",
  //     marginTop: theme.spacing(3),
  //     height: 380,
  //   },
  //   radioGroup: {
  //     margin: theme.spacing(1, 0),
  //   },
  speedDial: {
    position: "absolute",
    // "&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft": {
    //   //   bottom: theme.spacing(2),
    //   //   right: theme.spacing(2),
    // },
    // "&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight": {
    //   top: theme.spacing(2),
    //   left: theme.spacing(2),
    // },
  },
}));

const SpeedDialComponent = ({ optionSelected }) => {
  const classes = useStyles();
  const [direction, setDirection] = useState("right");
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  const handleDirectionChange = (event) => {
    setDirection(event.target.value);
  };

  const handleHiddenChange = (event) => {
    setHidden(event.target.checked);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleOptionSelected = (val) => {
    alert(val);
    handleClose();
  };

  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <div>
      <SpeedDial
        ariaLabel="SpeedDial"
        className={classes.speedDial}
        hidden={hidden}
        icon={<SpeedDialIcon color="secondary" />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
        direction={direction}
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
