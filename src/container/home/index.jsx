import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  makeStyles,
  Typography,
  Grid,
  CircularProgress,
} from "@material-ui/core";
import Card from "../../components/common/HomeCard";
import { getAllContents } from "../../state/actions/content";
import NoContent from "../../components/common/NoContent";

const materialCategories = ["theory", "blogs"];

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
    "&>*": {
      padding: theme.spacing(2),
    },
  },
}));

const Index = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const content = useSelector((state) => state.content);
  const { homeContentLoader } = useSelector((state) => state.notifications);

  useEffect(() => {
    dispatch(getAllContents());
    /*eslint-disable-next-line*/
  }, []);

  return (
    <div className={classes.root}>
      <Typography
        variant="h5"
        style={{ textTransform: "capitalize" }}
        color="secondary"
      >
        Suggested Articles
      </Typography>
      {homeContentLoader ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "50px",
          }}
        >
          <CircularProgress color="secondary" />
        </div>
      ) : (
        materialCategories.map((category) =>
          content[category]?.length ? (
            <div>
              <Typography
                variant="subtitle1"
                style={{ textTransform: "capitalize" }}
                color="primary"
              >
                {category}
              </Typography>
              <br />
              <Cards data={content[category]} />
            </div>
          ) : (
            ""
          )
        )
      )}
    </div>
  );
};

const Cards = ({ data }) => {
  return (
    <Grid container>
      {data?.map((x) => (
        <Grid item xs={12} sm={12} md={3} lg={3}>
          <Card data={x} pageType="home" />
        </Grid>
      ))}
    </Grid>
  );
};

export default Index;
