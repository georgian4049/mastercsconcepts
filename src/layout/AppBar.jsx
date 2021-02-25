import { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import {
  makeStyles,
  AppBar,
  Toolbar,
  InputBase,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
  CssBaseline,
  Tooltip,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import logo from "../assets/logo.png";
import AppbarLink from "./AppBarLinks";
import GetAppIcon from "@material-ui/icons/GetApp";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import BuildIcon from "@material-ui/icons/Build";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import GroupAddIcon from "@material-ui/icons/GroupAdd";

const drawerWidth = 210;

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
  search: {
    position: "relative",
    float: "right",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "rgba(255,0,0, 1)",
    // "&:hover": {
    //   backgroundColor: fade("rgba(255,0,0)", 0.9),
    // },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "#ffffff",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    color: "rgba(255,255,255, 1)",
    fontWeight: "bold",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "25ch",
      },
    },
  },
  drawer: {
    width: drawerWidth,

    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    top: "65px",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    top: "65px",
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
  list: {
    overflow: "hidden",
    backgroundColor: "rgb(255,255,255)",
    paddingTop: "0px",
  },
  typography: {
    padding: theme.spacing(2),
    fontWeight: "bold",
    color: theme.palette.secondary.main,
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

const sidebarTopList = [
  {
    link: "theory",
    key: "Theory",
    icon: <LocalLibraryIcon />,
    index: 0,
  },
  {
    link: "practical",
    key: "Practical",
    icon: <BuildIcon />,
    index: 1,
  },
  {
    link: "blogs",
    key: "Blogs",
    icon: <LibraryBooksIcon />,
    index: 2,
  },
  {
    link: "contributors",
    key: "Contributors",
    icon: <GroupAddIcon />,
    index: 4,
  },
  {
    link: "downloads",
    key: "Downloads",
    icon: <GetAppIcon />,
    index: 4,
  },
  {
    link: "subscribe",
    key: "Subscribe",
    icon: <BookmarkIcon />,
    index: 4,
  },
];

export default function SearchAppBar(props) {
  const classes = useStyles();
  const { courseArea, courseSubArea } = useSelector((state) => state.platform);
  const [open, setOpen] = useState(true);
  let history = useHistory();
  const handleDrawer = () => {
    setOpen(!open);
  };

  const drawer = (
    <div>
      <Tooltip title={courseSubArea["displayName"]}>
        <Typography className={classes.typography} align="center" noWrap>
          {courseSubArea["displayName"]}
        </Typography>
      </Tooltip>

      <Divider />
      <List className={classes.list}>
        {sidebarTopList.map((item) => (
          <Link
            to={`/${courseArea}/${courseSubArea.name}/${item.link}`}
            className={classes.link}
            key={item.key}
          >
            <ListItem
              button
              key={item.key}
              className={
                history.location.pathname ===
                `/${courseArea}/${courseSubArea.name}/${item.link}`
                  ? classes.isSelected
                  : ""
              }
            >
              <ListItemIcon
                className={
                  history.location.pathname ===
                  `/${courseArea}/${courseSubArea.name}/${item.link}`
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
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <img src={logo} alt="mastercsconcepts" style={{ height: "20px" }} />
          <Typography>Dev Mode</Typography>
          <div className={classes.rightContent}>
            <div>
              <AppbarLink />
            </div>
            {/* <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div> */}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
