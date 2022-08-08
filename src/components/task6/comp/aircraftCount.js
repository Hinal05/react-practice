import React from "react";

function AircraftCount({items}) {
  return (
    <React.Fragment>
      <p>Total Aircraft in list: {items.length}</p>
    </React.Fragment>
  )
}
export default AircraftCount;