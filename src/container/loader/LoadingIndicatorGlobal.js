import { useSelector } from "react-redux";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../../assets/logo.png";
import "./loader.css";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: "#fff",
  },
  logo: { height: "50px" },
}));

export default function SimpleBackdrop() {
  const classes = useStyles();
  const { isLoading } = useSelector((state) => state.notifications);

  return (
    <>
      {isLoading && (
        <>
          <Backdrop className={classes["backdrop"]} open={true}>
            <div className="loader" />
          </Backdrop>
        </>
      )}
    </>
  );
}
