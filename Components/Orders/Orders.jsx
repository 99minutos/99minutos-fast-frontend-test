import styles from './Orders.module.css';

export default function Orders({ orders }) {
  return (
    <>
      <div className={styles.container}>
        {orders.map((order) => (
          <div key={order.counter} className={styles.order}>
            <p className={styles.counter}>{order.counter}</p>
            <p className={styles.type}>{order.type}</p>
          </div>
        ))}
      </div>
    </>
  );
}
