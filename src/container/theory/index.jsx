import { useSelector } from "react-redux";
import { Grid } from "@material-ui/core";
import Card from "./Card";
import { theoryData } from "../../utils/mock";

function CardIndex() {
  const { courseArea, courseSubArea } = useSelector((state) => state.platform);
  console.log(theoryData);
  return (
    <>
      <Grid container spacing={1}>
        {theoryData &&
          theoryData[courseArea] &&
          theoryData[courseArea][courseSubArea.name] &&
          theoryData[courseArea][courseSubArea.name].map((i) => (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Card items={i["cardInfo"]} />
            </Grid>
          ))}
      </Grid>
    </>
  );
}
export default CardIndex;
