import React from "react";
import underconstruction from "../../assets/gen/under_construction.gif";

const UnderConstruction = () => {
  return (
    <div>
      <img
        src={underconstruction}
        alt="Under Construction"
        style={{
          objectFit: "center",
          display: "block",
          margin: "auto",
          //   marginRight: "auto",
          marginTop: "5%",
        }}
      />
    </div>
  );
};

export default UnderConstruction;
