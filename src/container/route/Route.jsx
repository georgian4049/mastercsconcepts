import { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import SpeedDial from "@material-ui/lab/SpeedDial";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";
import HomeIcon from "@material-ui/icons/Home";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import ExploreIcon from "@material-ui/icons/Explore";
import InfoIcon from "@material-ui/icons/Info";

const actions = [
  { icon: <ContactSupportIcon />, name: "Contact", link: "/contact" },
  { icon: <InfoIcon />, name: "About", link: "/about" },
  { icon: <HomeIcon />, name: "Home", link: "/home" },
];

const useStyles = makeStyles((theme) => ({
  speedDial: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  speedDialActionSelected: {
    color: theme.palette.secondary.main,
  },
}));

const Route = () => {
  const classes = useStyles();
  const history = useHistory();
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <div>
      <SpeedDial
        ariaLabel="Option"
        className={classes.speedDial}
        icon={<ExploreIcon fontSize="large" />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
        direction={"up"}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={
              <span
                className={
                  history.location.pathname.split("/")[1] ===
                  action.link.split("/")[1]
                    ? classes.speedDialActionSelected
                    : ""
                }
              >
                {action.icon}
              </span>
            }
            tooltipTitle={
              <span
                className={
                  history.location.pathname.split("/")[1] ===
                  action.link.split("/")[1]
                    ? classes.speedDialActionSelected
                    : ""
                }
              >
                {action.name}
              </span>
            }
            tooltipOpen
            onClick={() => history.push(action.link)}
          />
        ))}
      </SpeedDial>
    </div>
  );
};

export default Route;
