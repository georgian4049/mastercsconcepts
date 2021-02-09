import { useSelector } from "react-redux";
import { Grid } from "@material-ui/core";
import Card from "./Card";
import { data } from "../../utils/mock";

function Clearance() {
  const { courseArea, courseSubArea } = useSelector((state) => state.platform);
  console.log(data);
  return (
    <>
      <Grid container spacing={1}>
        {data &&
          data[courseArea] &&
          data[courseArea][courseSubArea.name] &&
          data[courseArea][courseSubArea.name].map((i) => (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Card items={i["cardInfo"]} />
            </Grid>
          ))}
      </Grid>
    </>
  );
}
export default Clearance;
