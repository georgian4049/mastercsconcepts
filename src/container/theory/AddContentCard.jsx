import { useHistory, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  makeStyles,
  fade,
  Tooltip,
  Fab,
  Grid,
  Typography,
} from "@material-ui/core";
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
  fabTop: {
    position: "fixed",
    top: theme.spacing(10),
    right: theme.spacing(2),
    zIndex: 4,
  },
  fabCenter: {
    position: "fixed",
    top: "50vh",
    right: "50%",
    margin: "auto",
    zIndex: 4,
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    // width: "100%",
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
    color: theme.palette.secondary.main,
  },
  inputRoot: {
    color: theme.palette.secondary.main,
  },
  inputInput: {
    padding: theme.spacing(1.5, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    margin: "auto",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "40ch",
      "&:focus": {
        width: "120ch",
      },
    },
  },
}));
export default function Cards({ handleSearch, contentsExist }) {
  const classes = useStyles();
  const history = useHistory();
  const { isAuthenticated } = useSelector((state) => state.authentication);
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
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
        <Grid item xs={12} sm={12} md={1} lg={11}>
          <Link
            to={`${history.location.pathname}/new-content`}
            className={classes.link}
          >
            <Tooltip title="Add Content">
              <Fab
                color="secondary"
                aria-label="Add Content"
                className={contentsExist ? classes.fabTop : classes.fabCenter}
                disabled={!isAuthenticated}
              >
                <AddIcon />
              </Fab>
            </Tooltip>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}
