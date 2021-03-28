import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core";
// import { postContents } from "../../state/actions/content";
import BackButton from "./BackButton";
import NewEditor from "../../container/editor/NewEditor";

const useStyles = makeStyles((theme) => ({
  //   root: {
  //     width: "100%",
  //     position: "relative",
  //   },
  header: {
    position: "fixed",
    width: "85%",
    height: "50px",
    zIndex: "99",
    backgroundColor: "#fff",
    padding: "5px",
  },
  button: {
    margin: theme.spacing(1),
    position: "fixed",
    zIndex: "1",
  },
  articleContent: {
    maxWidth: "100%",
    position: "relative",
    top: "50px",
    padding: "15px",
  },
}));

const DisplayNew = ({ match }) => {
  const classes = useStyles();
  const { materialCategory, courseArea, courseSubArea, topicId } = match.params;
  const content = useSelector((state) => state.content);
  const [data, setData] = useState({});

  useEffect(() => {
    if (content && content[courseArea]?.[courseSubArea]?.[materialCategory]) {
      const temp = content[courseArea][courseSubArea][materialCategory].find(
        (i) => i["_id"] === topicId
      );
      setData(temp);
    }
  }, [courseArea, courseSubArea, materialCategory, topicId, content]);

  return (
    <>
      <BackButton />
      <div className={classes.articleContent}>
        {data?.contentData ? (
          <>
            <NewEditor data={data} existing={true} />
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default DisplayNew;
