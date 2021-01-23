import React from "react";
import clsx from "clsx";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Drawer,
  List,
  CssBaseline,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const drawerWidth = 240;

// const sidebarTopList = [
//   {
//     link: "/home",
//     key: "Home",
//     icon: <HomeIcon />,
//     index: 0,
//   },
//   {
//     link: "/self-service",
//     key: "Self Service",
//     icon: <TouchAppIcon />,
//     index: 1,
//   },
//   {
//     link: "/downloads",
//     key: "Downloads",
//     icon: <GetAppIcon />,
//     index: 2,
//   },
//   {
//     link: "/jobs",
//     key: "Jobs",
//     icon: <WorkIcon />,
//     index: 3,
//   },
//   {
//     link: "/qliq-difference",
//     key: "qliq",
//     icon: <WorkIcon />,
//     index: 4,
//   },
// ];
// const sidebarBottomList = [
//   {
//     link: "/update-profile",
//     key: "Update Profile",
//     icon: <UpdateIcon />,
//     index: 0,
//   },
//   {
//     link: "/login",
//     key: "logout",
//     icon: <ExitToAppIcon />,
//     index: 0,
//   },
// ];

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: "#F26522",
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    backgroundColor: "#F26522",
  },
  drawerOpen: {
    width: drawerWidth,
    backgroundColor: "#F26522",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    backgroundColor: "#F26522",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(7) + 1,
    },
  },
  toolbar: {
    backgroundColor: "#F26522",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
  },
  image: {
    width: "212px",
  },
  logo_small: {
    width: "40px",
    height: "40px",
  },
  logo: {
    width: "100px",
    height: "60px",
  },
  listTop: {
    overflow: "hidden",
    // backgroundColor: "rgb(255,255,255)",
    paddingTop: "0px",
  },
  listBottom: {
    overflow: "hidden",
    // backgroundColor: "rgb(255,255,255)",
    paddingTop: "0px",
    marginTop: "auto",
    marginBottom: "10px",
  },
  logout: {
    marginLeft: "auto",
    // color: "#ffffff",
  },
  link: {
    textDecoration: "none",
    color: "#000000",
  },
  isSelected: {
    borderRight: "2px solid #fff",
    color: "white",
    // borderColor: "#F26522",
    // "&:hover": {
    //   color: "#000000",
    //   backgroundColor: "#F26522",
    // },
  },
  isSelectedListItem: {
    color: "white",
  },
}));

export default function MiniDrawer() {
  const classes = useStyles();
  let history = useHistory();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(!open);
  };
  const handleDrawerClose = () => {
    setOpen(!open);
  };

  const drawer = (list, style) => (
    <List className={classes[style]}>
      {list.map((item) => (
        <Link to={item.link} className={classes.link} key={item.key}>
          <ListItem
            button
            key={item.key}
            className={
              history.location.pathname === item.link ? classes.isSelected : ""
            }
          >
            <ListItemIcon
              className={
                history.location.pathname === item.link
                  ? classes.isSelectedListItem
                  : ""
              }
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.key} />
          </ListItem>
        </Link>
      ))}
    </List>
  );
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
        onMouseEnter={handleDrawerOpen}
        onMouseLeave={handleDrawerClose}
      >
        <div className={classes.toolbar}>
          <IconButton>
            {open
              ? // <img src={logo} alt="Logo" className={classes.image} />
                "Large"
              : // <img src={logo_small} alt="Logo" className={classes.logo_small} />
                "Small"}
          </IconButton>
        </div>
        {/* {drawer(sidebarTopList, "listTop")}
        {drawer(sidebarBottomList, "listBottom")} */}
      </Drawer>
    </div>
  );
}
