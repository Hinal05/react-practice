import React, { useContext } from "react";

function AddAircraft({ListContext}) {
  const {handleChange, handleSubmit, addItem} = useContext(ListContext);
  return (
    <form onSubmit={handleSubmit}>
      <div className="field-wrap">
        <label>Aircraft Name:</label>
        <input type='text' name="name" id="name" required="required" placeholder="Enter Name..." onChange={handleChange} value={addItem.name} />
      </div>
      <div className="field-wrap">
        <label>Country:</label>
        <input type='text' name="country" id="country" required="required" placeholder="Enter Country..." onChange={handleChange} value={addItem.country} />
      </div>
      <button type="submit">Add</button>
    </form>
  )
}
export default AddAircraft;