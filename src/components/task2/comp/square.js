import React from "react";
import "./square.css";

function Square({val, selectSquare}) {
  return <div className="square" onClick={selectSquare}>{val}</div>
}

export default Square;