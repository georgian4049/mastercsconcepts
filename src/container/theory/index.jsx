import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Grid } from "@material-ui/core";
import Card from "./Card";
import AddContentCard from "./AddContentCard";
import NoContent from "../noContent/NoContent";

function CardIndex() {
  const { courseArea, courseSubArea, materialCategory } = useSelector(
    (state) => state.platform
  );
  const content = useSelector((state) => state.content);
  const [data, setData] = useState([]);
  const [filteredDatas, setFilteredDatas] = useState([]);

  useEffect(() => {
    if (
      content &&
      content[courseArea]?.[courseSubArea["name"]]?.[materialCategory]
    ) {
      setData(content[courseArea][courseSubArea["name"]][materialCategory]);
      setFilteredDatas(
        content[courseArea][courseSubArea["name"]][materialCategory]
      );
    }
  }, [content, courseArea, courseSubArea, materialCategory]);

  const handleSearch = (searchKey) => {
    try {
      if (searchKey !== undefined && data !== undefined) {
        let filtered = data.filter(
          (item) =>
            item["authorUsername"]
              .toLowerCase()
              .includes(searchKey.toLowerCase()) ||
            item["title"].toLowerCase().includes(searchKey.toLowerCase()) ||
            item["datePublished"].includes(searchKey) ||
            item["description"]
              .toLowerCase()
              .includes(searchKey.toLowerCase()) ||
            item["authorName"].toLowerCase().includes(searchKey.toLowerCase())
        );
        setFilteredDatas(filtered);
      } else {
        setFilteredDatas(data);
      }
    } catch (err) {
      setFilteredDatas(data);
    }
  };
  return (
    <>
      <div style={{ margin: "5px", height: "80px" }}>
        <AddContentCard handleSearch={handleSearch} />
      </div>
      <div style={{ margin: "10px" }}>
        <Grid container spacing={1}>
          {filteredDatas.length ? (
            filteredDatas.map((i) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={i["_id"]}>
                <Card data={i} />
              </Grid>
            ))
          ) : (
            <NoContent />
          )}
        </Grid>
      </div>
    </>
  );
}

export default CardIndex;
