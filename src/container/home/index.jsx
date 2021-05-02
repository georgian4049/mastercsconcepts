import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles, Typography, Grid } from "@material-ui/core";
import Card from "../../components/common/HomeCard";
import { getAllContents } from "../../state/actions/content";

const categories = ["Suggestions", "Newly Added", "Widely Read", "Stats"];
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

  useEffect(() => {
    dispatch(getAllContents());
    /*eslint-disable-next-line*/
  }, []);

  return (
    <div className={classes.root}>
      <Typography variant="h5" style={{ textTransform: "capitalize" }}>
        Suggested Articles
      </Typography>
      {materialCategories.map((category) =>
        content[category]?.length ? (
          <div>
            <Typography variant="h6" style={{ textTransform: "capitalize" }}>
              {category}
            </Typography>
            <br />
            <Cards data={content[category]} />
          </div>
        ) : (
          ""
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
          <Card data={x} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Index;
