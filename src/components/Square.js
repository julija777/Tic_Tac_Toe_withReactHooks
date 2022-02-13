import React from "react";

const style = {
  background: "lightblue",
  border: "2px solid teal",
  fontSize: "30px",
  fontWeight: "800",
  cursor: "pointer",
  outline: "none",
};

const Square = ({ value, onClick }) => (
  <button style={style} onClick={onClick}>
    {value}
  </button>
);
export default Square;
