import React from "react";
import Order from "./Order";
import styles from "../../styles/Containers.module.css";

const index = ({ activeContainer }) => {
  const renderOrdersList = () => {
    if (activeContainer)
      return activeContainer.orders.map((order) => (
        <Order counter={order.counter} type={order.type} />
      ));
  };
  return <div class={styles.container}>{renderOrdersList()}</div>;
};

export default index;
