import { useState, useEffect } from 'react';
import Buttons from '../Buttons/Buttons';
import Orders from '../Orders/Orders';
import styles from './Containers.module.css';

export default function Containers({ data }) {
  const [selectedContainer, setSelectedContainer] = useState(data[0].name);
  const [orders, setOrders] = useState(data[0].orders);

  useEffect(() => {
    setOrders(filterContainer());
  }, [selectedContainer]);

  const filterContainer = () => {
    return data.filter((container) => container.name === selectedContainer)[0]
      .orders;
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h3>Containers</h3>
        <div className={styles.ordersTitle}>
          <h3>Orders</h3>
          <p className={styles.containerTitle}>Container {selectedContainer}</p>
        </div>
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.buttons}>
          {data.map((container) => (
            <Buttons
              key={container.name}
              containers={container}
              setSelectedContainer={setSelectedContainer}
            />
          ))}
        </div>

        <div className={styles.orders}>
          <Orders orders={orders} />
        </div>
      </div>
    </div>
  );
}
