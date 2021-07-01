import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [selectedContainer, setSelectedContainer] = useState({
    name: '',
    orders: [],
  });

  const [containers, setContainers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/containers')
      .then((result) => {
        const { data } = result;
        setContainers(data.data.containers);
      })
      .catch(() => {
        console.log('Something went wrong!');
      });
  }, []);

  const onSelectedContainerClick = (name) => {
    const container = containers.find((container) => container.name === name);
    setSelectedContainer(container);
  };

  return (
    <div className={styles.mainTitle}>
      <div className={styles.buttons}>
        {
          containers.length > 0 ? (
            containers.map((container) => (
              <button
                key={container.name}
                onClick={() => onSelectedContainerClick(container.name)}
                className={[styles.button, `${selectedContainer.name === container.name ? styles.buttonActive : ''}`].join(" ")}
              >
                <h1>{container.name}</h1>
              </button>
            ))
          ) : null
        }
      </div>
      <div className={styles.items}>
        { selectedContainer && <h1>Orders | Container {selectedContainer.name}</h1>}
        {
          selectedContainer.orders.length > 0 ? (
            selectedContainer.orders.map((item) => (
              <div key={item.counter} className={styles.item}>
                <h2>{item.counter}</h2>
                <p>{item.type}</p>
              </div>
            ))
          ) : null
        }
      </div>
    </div>
  );
}
