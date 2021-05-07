import Skeleton from "@material-ui/lab/Skeleton";
import { Avatar, Box, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    maxHeight: 300,
    minHeight: 300,
    float: "left",
    "&>*": {
      marginTop: "5px",
    },
  },
  image: {
    height: 140,
  },
});

const CardSkeleton = () => {
  const classes = useStyles();
  return (
    <div className={classes["root"]}>
      <Skeleton variant="rect" width="345px">
        <div style={{ height: "140px" }} />
      </Skeleton>
      <Skeleton width="80%" variant="rect" />
      <Skeleton width="100%" variant="rect" />
      <Skeleton width="100%" variant="rect" />
      <Skeleton variant="circle">
        {" "}
        <Avatar />{" "}
      </Skeleton>
    </div>
  );
};

export default CardSkeleton;
