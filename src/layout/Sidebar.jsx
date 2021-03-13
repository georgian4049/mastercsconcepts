import { useState } from "react";
import clsx from "clsx";
import { useSelector } from "react-redux";
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
  Tooltip,
  Typography,
  Divider,
} from "@material-ui/core";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import BuildIcon from "@material-ui/icons/Build";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import MenuBookIcon from "@material-ui/icons/MenuBook";

const drawerWidth = 240;

const sidebarTopList = [
  {
    link: "theory",
    key: "Theory",
    icon: <LocalLibraryIcon />,
    index: 0,
  },
  {
    link: "blogs",
    key: "Blogs",
    icon: <LibraryBooksIcon />,
    index: 1,
  },
  {
    link: "practical",
    key: "Practical",
    icon: <BuildIcon />,
    index: 2,
  },

  {
    link: "contributors",
    key: "Contributors",
    icon: <GroupAddIcon />,
    index: 3,
  },
  {
    link: "scientific-papers",
    key: "Scientific Papers",
    icon: <MenuBookIcon />,
    index: 4,
  },
];

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
    zIndex: 1,
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    backgroundColor: "#F26522",
  },
  typography: {
    padding: theme.spacing(2),
    fontWeight: "bold",
    color: "#fff",
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
  const [open, setOpen] = useState(false);
  const { courseArea, courseSubArea } = useSelector((state) => state.platform);
  const handleDrawerOpen = () => {
    setOpen(!open);
  };
  const handleDrawerClose = () => {
    setOpen(!open);
  };

  const drawer = (list, style) => (
    <div className={classes[style]}>
      {style === "listTop" ? (
        <Tooltip title={courseSubArea["displayName"]}>
          <Typography className={classes.typography} align="center" noWrap>
            {open ? courseSubArea["displayName"] : courseSubArea["name"]}
          </Typography>
        </Tooltip>
      ) : (
        ""
      )}

      <Divider />
      <List className={classes[style]}>
        {list.map((item) => (
          <Link
            to={
              style === "listTop"
                ? `/${courseArea}/${courseSubArea.name}/${item.link}`
                : `/${item.link}`
            }
            className={classes.link}
            key={item.key}
          >
            <ListItem
              button
              key={item.key}
              className={
                history.location.pathname.split("/")[3] === item.link
                  ? classes.isSelected
                  : ""
              }
            >
              <ListItemIcon
                className={
                  history.location.pathname.split("/")[3] === item.link
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
      {/* <div className={classes.chevron}>
        <IconButton onClick={handleDrawer}>
          {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </div> */}
    </div>
  );
  return (
    <div className={classes.root}>
      <CssBaseline />
      {/* {history.location.pathname.includes(`${courseArea / courseSubArea}`)} */}
      {history.location.pathname.includes(
        `${courseArea}/${courseSubArea["name"]}`
      ) ? (
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
              {open ? (
                <img src={logo} alt="Logo" className={classes.image} />
              ) : (
                <img src={logo} alt="Logo" className={classes.logo_small} />
              )}
            </IconButton>
          </div>
          {drawer(sidebarTopList, "listTop")}
          {/* {drawer(sidebarBottomList, "listBottom")} */}
        </Drawer>
      ) : (
        ""
      )}
    </div>
  );
}
