import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Grid } from "@material-ui/core";
import Card from "./Card";
import AddContentCard from "./AddContentCard";

function CardIndex() {
  const { courseArea, courseSubArea, materialCategory } = useSelector(
    (state) => state.platform
  );
  const content = useSelector((state) => state.content);
  const [data, setData] = useState([]);
  useEffect(() => {
    if (
      content &&
      content[courseArea]?.[courseSubArea["name"]]?.[materialCategory]
    ) {
      setData(content[courseArea][courseSubArea["name"]][materialCategory]);
    }
  }, [content, courseArea, courseSubArea, materialCategory]);

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

        {data &&
          data.map((i) => (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Card data={i} />
            </Grid>
          ))}
      </Grid>
    </>
  );
}

export default CardIndex;
