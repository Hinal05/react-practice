import React, { useState } from "react";
import './task6.css';
import data from './data';

import AircraftCount from "./comp/aircraftCount";
import AircraftList from "./comp/aircraftList";
import AddAircraft from "./comp/addAircraft";

//Reference to Context, InlineListing.
function Task6() {
  const [items, setItems] = useState(data);
  const [addItem, setAddItem] = useState({
    name: '',
    country: ''
  })
  return (
    <section className="content-wrap">
      <h1>Aircraft Listing using context</h1>
      <div className="aircraft-wrap">
        <AircraftCount items={items} />
        <AddAircraft addItem={addItem} setAddItem={setAddItem} items={items} setItems={setItems} />
        <AircraftList items={items} />
      </div>
    </section>
  )
}

export default Task6;