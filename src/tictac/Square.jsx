import React from "react";

const Square = (props) => {
  return (
    <div
      onClick={props.onClick}
      style={{
        border: "2px solid",
        borderRadius:"10px",
        height: "100px",
        width: "100%",
        fontSize:"40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      className="square"
    >
      <h5>{props.value}</h5>
    </div>
  );
};

export default Square;