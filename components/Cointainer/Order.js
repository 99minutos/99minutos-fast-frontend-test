import React from "react";

const Order = ({ counter = "", type = "" }) => {
  return (
    <div class="order_wrapper">
      <p>{counter}</p>
      <p>{type}</p>
    </div>
  );
};

export default Order;
