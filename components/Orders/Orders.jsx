import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Order from "../../components/Order";

/**Material */
import List from "@material-ui/core/List";

const Orders = () => {
  const { container } = useSelector((state) => state.container);
  return (
    <>
      <h3>
        Orders | <small>Container {container.name}</small>
      </h3>
      <List>
        {container.orders
          ? container.orders.map((order, index) => (
              <Order key={index} order={order} />
            ))
          : "Seleccione uno"}
      </List>
    </>
  );
};

export default Orders;
