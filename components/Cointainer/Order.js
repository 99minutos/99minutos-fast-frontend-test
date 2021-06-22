import React from "react";

const Order = ({ counter = "", type = "" }) => {
  return (
    <div class="order_wrapper">
      <h2>{counter}</h2>
      <p>{type}</p>
    </div>
  );
};

export default Order;
