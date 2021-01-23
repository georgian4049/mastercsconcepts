import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { PLATFORM } from "../../state/actions/types";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import {
  MenuList,
  Popper,
  MenuItem,
  Paper,
  Grow,
  ClickAwayListener,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  paper: {
    marginRight: theme.spacing(2),
  },
  list: {
    overflow: "hidden",
    backgroundColor: "rgb(255,255,255)",
    paddingTop: "0px",
  },
  logout: {
    marginLeft: "auto",
    color: "#ffffff",
  },
  link: {
    textDecoration: "none",
    color: "#000000",
  },
  isSelected: {
    color: "#F26522",
    padding: "auto",
    // "&:hover": {
    //   color: "#000000",
    //   backgroundColor: "#F26522",
    // },
  },
}));

export default function MenuListComposition({ title, list, name }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const { courseArea, courseSubArea } = useSelector((state) => state.platform);
  const dispatch = useDispatch();

  const anchorRef = useRef(null);
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const handleMenuItemClick = (e, x) => {
    dispatch({
      type: PLATFORM.SET_COURSE_DETAILS,
      payload: {
        courseArea: name,
        courseSubArea: x,
      },
    });
    handleClose(e);
  };

  return (
    <div className={classes.root}>
      <div>
        <Button
          ref={anchorRef}
          aria-controls={open ? "menu-list-grow" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          color={name === courseArea ? "secondary" : ""}
          endIcon={
            name === courseArea && open ? (
              <KeyboardArrowUpIcon />
            ) : (
              <KeyboardArrowDownIcon />
            )
          }
        >
          {title}
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper style={{ backgroundColor: "white" }}>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="menu-list-grow"
                    onKeyDown={handleListKeyDown}
                    className={classes.list}
                  >
                    {list.map((item) => (
                      <Link
                        to={`/${name}/${item.name}/theory`}
                        className={classes.link}
                        key={item.key}
                      >
                        <MenuItem
                          button
                          key={item.name}
                          onClick={(e) => handleMenuItemClick(e, item)}
                          className={
                            item === courseSubArea ? classes.isSelected : ""
                          }
                        >
                          <div>{item.displayName}</div>
                        </MenuItem>
                      </Link>
                    ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
}
