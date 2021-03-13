import { useHistory, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { makeStyles, fade, Tooltip, Fab, Grid } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import SearchIcon from "@material-ui/icons/Search";
import { Search } from "@material-ui/icons";
import InputBase from "@material-ui/core/InputBase";

const useStyles = makeStyles((theme) => ({
  root: { flexGrow: 1 },
  link: {
    textDecoration: "none",
    color: "#000000",
  },
  fab: {
    position: "fixed",
    top: theme.spacing(10),
    right: theme.spacing(2),
    zIndex: 4,
  },
  // search: {
  //   position: "fixed",
  //   top: theme.spacing(10),
  //   right: theme.spacing(10),
  // },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(3, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "secondary",
  },
  inputInput: {
    padding: theme.spacing(2, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    // backgroundColor: "#000",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "40ch",
      "&:focus": {
        width: "120ch",
      },
    },
  },
}));
export default function Cards({ handleSearch }) {
  const classes = useStyles();
  const history = useHistory();
  const { isAuthenticated } = useSelector((state) => state.authentication);
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={1} lg={11}>
          <Link
            to={`${history.location.pathname}/new-content`}
            className={classes.link}
          >
            <Fab
              color="secondary"
              aria-label="Add Content"
              className={classes.fab}
              disabled={!isAuthenticated}
            >
              <AddIcon />
            </Fab>
          </Link>
        </Grid>
        <Grid item xs={12} sm={12} md={11} lg={11}>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              autoFocus={false}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              onChange={(e) => handleSearch(e.target.value)}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
        </Grid>
      </Grid>

      {/* <Fab color="secondary" aria-label="Search" className={classes.search}>
        <Search />
      </Fab> */}
      {/* <IconButton
        color="secondary"
        aria-label="Search"
        className={classes.search}
      >
        <Search size="large" />
      </IconButton> */}
    </div>
  );
}
