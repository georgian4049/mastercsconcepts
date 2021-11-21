import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import {
  makeStyles,
  AppBar,
  Toolbar,
  Chip,
  CssBaseline,
  Tooltip,
  Divider,
  Typography,
  Hidden,
} from "@material-ui/core";
import logo from "../assets/logo.png";
import small_logo from "../assets/small_logo.png";

import AppbarLink from "./AppBarLinks";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import Routes from "../container/route/Route";
import DeveloperModeIcon from "@material-ui/icons/DeveloperMode";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    backgroundColor: "#fff",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: "#fff",
  },
  rightContent: {
    marginRight: "0px",
    margin: "auto",
    display: "flex",
  },
  appBarLink: {
    margin: "auto",
  },

  link: {
    textDecoration: "none",
    color: "#000000",
  },
  isSelected: {
    borderRight: "2px solid #F26522",
    borderColor: "#F26522",
    // "&:hover": {
    //   color: "#000000",
    //   backgroundColor: "#F26522",
    // },
  },
  // isSelectedListItem: {
  //   color: "white",
  // },
}));

const profile = [
  { key: "1", link: "profile", name: "Your Profile" },
  { key: "2", link: "settings", name: "Settings" },
  { key: "3", link: "logout", name: "Logout" },
];

export default function SearchAppBar(props) {
  const classes = useStyles();
  const history = useHistory();
  const { isAuthenticated, username } = useSelector(
    (state) => state.authentication
  );
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Hidden smDown>
            <img src={logo} alt="mastercsconcepts" style={{ height: "20px" }} />
          </Hidden>
          <Hidden mdUp>
            <Typography variant="h4" color="secondary">
              CS
            </Typography>
          </Hidden>
          <DeveloperModeIcon color="secondary" fontSize="large" />
          <div className={classes.rightContent}>
            <div className={classes.appBarLink}>
              <AppbarLink />
            </div>
            {isAuthenticated ? (
              <div>
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle color="secondary" />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  style={{ marginTop: "30px" }}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem>
                    <div>
                      <Typography variant="subtitle2">Signed in as</Typography>
                      <Typography variant="subtitle1">{username}</Typography>
                    </div>
                  </MenuItem>
                  <Divider />
                  {profile.map((item) => (
                    <Link
                      to={`/${item.link}`}
                      className={classes.link}
                      style={{ textDecoration: "none" }}
                      key={item.key}
                    >
                      <MenuItem
                        button
                        key={item["key"]}
                        // onClick={() => history.replace(`${item["link"]}`)}
                      >
                        {item["name"]}
                      </MenuItem>
                    </Link>
                  ))}
                </Menu>
              </div>
            ) : (
              <Tooltip title="Login to access all features">
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                  onClick={() => history.replace("/login")}
                >
                  <LockOpenIcon />
                </IconButton>
              </Tooltip>
            )}
          </div>
        </Toolbar>
      </AppBar>
      <Routes />
    </div>
  );
}
