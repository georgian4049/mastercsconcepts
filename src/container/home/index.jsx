import { makeStyles, Typography } from "@material-ui/core";
import Card from "../../components/common/HomeCard";

const categories = ["Suggestions", "Newly Added", "Widely Read", "Stats"];

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
  return (
    // <div className={classes.root}>
    //   {categories.map((category) => (
    //     <div>
    //       <Typography variant="h5">{category}</Typography>
    //       <Card data={[]} />
    //     </div>
    //   ))}
    // </div>
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <Typography variant="h5">Welcome to Home Page!</Typography>
      <Typography variant="subtitle1" color="secondary">
        I am currently working on this page, Something interesting is going to
        come
      </Typography>
      <Typography variant="subtitle2" color="primary">
        Howerever for now you can use links from header to route to your
        destination.. Happy Learning!
      </Typography>
    </div>
  );
};

export default Index;
