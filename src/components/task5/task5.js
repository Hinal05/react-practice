import React, { useState } from "react";
import "./task5.css";

import ProductInfo from "./comp/productInfo";
import AddressInfo from "./comp/addressInfo";
import Summary from "./comp/summary";

// Reference to Lifting.
function Task5() {

  const [address, setAddress] = useState([]);
  const [proName, setProName] = useState([]);
  const [proQuantity, setProQuantity] = useState([]);

  return (
    <section className="content-wrap">
      <h1>Product Order</h1>
      <ProductInfo setProName={setProName} setProQuantity={setProQuantity} />
      <AddressInfo setAddress={setAddress} />
      <Summary address={address} proName={proName} proQuantity={proQuantity} setProQuantity={setProQuantity} />
    </section>
  )
}

export default Task5;