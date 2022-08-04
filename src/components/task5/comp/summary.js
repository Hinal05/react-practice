import React from 'react';
import "../task5.css";

function Summary({address, proQuantity, proName, setProQuantity}) {

  function handleChange(event) {
    setProQuantity(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    const quantity = event.target.elements.quantity.value;
    setProQuantity(quantity);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h3>Summary</h3>
        <div className="field-wrap">
          <label>Product Name: </label><strong>{proName}</strong>
        </div>
        <div className="field-wrap">
          <label>Product Quantity:</label>
          <input type="number" value={proQuantity} id='quantity' onChange={handleChange} />
        </div>
        <div className="field-wrap">
          <label>Address:</label> <strong>{address}</strong>
        </div>
        <hr />
        <button type="submit">Place Order</button>
      </form>
    </>
  )
}

export default Summary;
