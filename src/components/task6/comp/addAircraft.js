import React, { useContext } from "react";

function AddAircraft({ListContext}) {
  const {handleChange, handleSubmit} = useContext(ListContext);
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