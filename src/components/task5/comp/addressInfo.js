import React from 'react';
import "../task5.css";

function AddressInfo({setAddress}) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const address = event.target.elements.address.value;
    setAddress(prevAddress => [...prevAddress, address]);
    console.log(setAddress);
  }

  return (
    <form  onSubmit={handleSubmit}>
      <h3>Address Information</h3>
      <div className="field-wrap">
        <label>Address:</label>
        <textarea placeholder="Enter Address" id='address' />
      </div>
      <button type='submit'>Add Address</button>
    </form>
  )
}

export default AddressInfo;
