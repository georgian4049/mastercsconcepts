import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
import Card from "./Card";
import { theoryData } from "../../utils/mock";
import TextEditor from "../../components/common/TextEditor";
import AddContent from "./AddConent";
import AddContentCard from "./AddContentCard";
import ContentContainer from "../../components/common/ContentContainer";

function CardIndex() {
  const { courseArea, courseSubArea } = useSelector((state) => state.platform);
  const [state, setState] = useState({
    addContent: false,
  });
  const handleChange = (name, val) => {
    setState({ ...state, [name]: val });
  };

  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <AddContentCard
            handleChange={handleChange}
            name="addContent"
            val={state.addContent}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          {theoryData &&
            theoryData[courseArea] &&
            theoryData[courseArea][courseSubArea.name] &&
            theoryData[courseArea][courseSubArea.name]["theory"].map((i) => (
              <Card items={i["cardInfo"]} key={i["cardInfo"]["id"]} />
            ))}
        </Grid>
      </Grid>
    </>
  );
}

export default CardIndex;
