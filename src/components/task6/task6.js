import React, { useContext } from "react";
import './task6.css';
// import data from './data';

import AircraftCount from "./comp/aircraftCount";
import AircraftList from "./comp/aircraftList";
import AddAircraft from "./comp/addAircraft";

import ListContext, {ListProvider} from './context/context';

const Context = (props) => {
  return (
    <ListProvider>
      <Task6 />
    </ListProvider>
  )
}

//Reference to Context, InlineListing.
const Task6 = (props) => {
  const {items, addItem} = useContext(ListContext);
  return (
    <section className="content-wrap">
      <h1>Aircraft Listing using context</h1>
      <div className="aircraft-wrap">
        <AircraftCount items={items} />
        <AddAircraft addItem={addItem} ListContext={ListContext} />
        <AircraftList items={items} />
      </div>
    </section>
  )
}

export default Context;