import { useSelector } from "react-redux";
import { makeStyles, fade, Grid } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import Skeleton from "@material-ui/lab/Skeleton";
import AddContentFab from "../../components/common/AddContentFab";

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
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    marginTop: 15,
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
export default function ContentHeaderAction({
  handleSearch,
  contentsExist,
  filteredDatasExist,
}) {
  const classes = useStyles();
  const { loader } = useSelector((state) => state["platform"]);
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={11} lg={11}>
          {loader["content"] ? (
            <div className={classes.search}>
              <Skeleton animation="wave" height={60} width="100%" />
            </div>
          ) : contentsExist ? (
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
          ) : (
            ""
          )}
        </Grid>
        <Grid item xs={12} sm={12} md={1} lg={1}>
          {loader["content"] ? (
            <Skeleton
              animation="wave"
              variant="circle"
              width={60}
              height={60}
              className={classes["fabTop"]}
            />
          ) : filteredDatasExist ? (
            <div className={classes.fabTop}>
              <AddContentFab />
            </div>
          ) : (
            ""
          )}
        </Grid>
      </Grid>
    </div>
  );
}
