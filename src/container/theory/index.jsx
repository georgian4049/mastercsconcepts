import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Grid } from "@material-ui/core";
import Card from "../../components/common/HomeCard";
import ContentHeaderAction from "./ContentHeaderAction";
import NoContent from "../../components/common/NoContent";
import CardLoader from "../../container/loader/Card";

function CardIndex() {
  const { courseArea, courseSubArea, materialCategory, loader } = useSelector(
    (state) => state["platform"]
  );
  const content = useSelector((state) => state.content);
  const [data, setData] = useState([]);
  const [filteredDatas, setFilteredDatas] = useState([]);

  useEffect(() => {
    if (content && content[courseArea]?.[courseSubArea]?.[materialCategory]) {
      setData(content[courseArea][courseSubArea][materialCategory]);
      setFilteredDatas(content[courseArea][courseSubArea][materialCategory]);
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
        <ContentHeaderAction
          handleSearch={handleSearch}
          contentsExist={data.length}
          filteredDatasExist={filteredDatas.length}
        />
      </div>
      <div style={{ margin: "10px" }}>
        {loader["content"] ? (
          <CardLoader />
        ) : (
          <>
            {filteredDatas.length ? (
              <Grid container spacing={1}>
                {filteredDatas.map((i) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={i["_id"]}>
                    <Card data={i} />
                  </Grid>
                ))}
              </Grid>
            ) : (
              <NoContent />
            )}
          </>
        )}
      </div>
    </>
  );
}

export default CardIndex;
