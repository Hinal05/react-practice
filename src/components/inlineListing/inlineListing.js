import React, { useState } from "react";
import './inlineListing.css';
import data from './data';

import AircraftCount from "./comp/aircraftCount";
import AircraftList from "./comp/aircraftList";
import AddAircraft from "./comp/addAircraft";

function InlineListing() {
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

export default InlineListing;