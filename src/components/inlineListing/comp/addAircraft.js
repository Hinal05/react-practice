import React from "react";
import {nanoid} from "nanoid";

function AddAircraft({addItem, setAddItem, items, setItems}) {
  function handleChange(event){
    event.preventDefault();
    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;
    const newData = {...addItem};
    newData[fieldName] = fieldValue;
    setAddItem(newData);
  }
  function handleSubmit(event) {
    event.preventDefault();
    const newItem = {
      id: nanoid(),
      name: addItem.name,
      country: addItem.country,
    }
    const newItems = [...items, newItem];
    setItems(newItems);
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="field-wrap">
        <label>Aircraft Name:</label>
        <input type='text' name="name" id="name" required="required" placeholder="Enter Name..." onChange={handleChange} />
      </div>
      <div className="field-wrap">
        <label>Country:</label>
        <input type='text' name="country" id="country" required="required" placeholder="Enter Country..." onChange={handleChange} />
      </div>
      <button type="submit">Add</button>
    </form>
  )
}
export default AddAircraft;