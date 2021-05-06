import React from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { makeStyles, Tooltip, Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles((theme) => ({
  root: { flexGrow: 1 },
  link: {
    textDecoration: "none",
    color: "#000000",
  },

  fabCenter: {
    position: "fixed",
    top: "50vh",
    right: "50%",
    margin: "auto",
    zIndex: 4,
  },
}));

const AddContentFab = () => {
  const classes = useStyles();
  const history = useHistory();
  const { isAuthenticated } = useSelector((state) => state.authentication);
  console.log(isAuthenticated);
  return (
    <Link
      to={isAuthenticated ? `${history.location.pathname}/new-content` : "#"}
      className={classes.link}
    >
      <Fab
        color="secondary"
        aria-label="Add Content"
        disabled={!isAuthenticated}
      >
        <Tooltip title="Add Content">
          <AddIcon />
        </Tooltip>
      </Fab>
    </Link>
  );
};

export default AddContentFab;
