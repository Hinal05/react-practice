import React from 'react';
import "../task5.css";

function ProductInfo({setProName, setProQuantity}) {
  const products = ["Product1", "Product2", "Product3", "Product4", "Product5"];

  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.proName.value;
    const quantity = event.target.elements.proQuantity.value;
    setProName(prevName => [...prevName, name]);
    setProQuantity(prevQuantity => [...prevQuantity, quantity])
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Product Information</h3>
       <div className="field-wrap">
          <label>Product Name:</label>
          <select id='proName'>
            <option>Select product</option>
            {products.map((product) => {
              return <option key={product} value={product}>{product}</option>
            })}
          </select>
        </div>
        <div className="field-wrap">
          <label>Enter Quantity:</label>
          <input type="number" id='proQuantity' />
        </div>
        <button type='submit'>Add Product</button>
    </form>
  )
}

export default ProductInfo;
