import React, { useState, useEffect } from "react";
import ContainerList from "./ContainersList/";
import Container from "./Cointainer/";
import styles from "../styles/Containers.module.css";

const Containers = () => {
  const [containerList, setContainerList] = useState();
  const [containerSelected, setContainerSelected] = useState();
  const [activeContainer, setActiveContainer] = useState();

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("http://localhost:3000/api/containers");
        const data = await res.json();
        if (data) setContainerList(data);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  useEffect(() => {
    if (containerSelected) {
      console.log(
        "sad: activeContainer",
        containerList.data.containers[containerSelected]
      );
      setActiveContainer(containerList.data.containers[containerSelected]);
    }
  }, [containerSelected]);

  return (
    <div className={styles.containers}>
      <ContainerList
        containerSelected={containerSelected}
        setContainerSelected={setContainerSelected}
        containerList={containerList}
      />
      {activeContainer && <Container activeContainer={activeContainer} />}
    </div>
  );
};

export default Containers;
