import React, { useState, useEffect } from "react";
import ContainerList from "./ContainersList/";
import Container from "./Cointainer/";
import styles from "../styles/Containers.module.css";

const Containers = () => {
  const [containerList, setContainerList] = useState();
  const [containerSelected, setContainerSelected] = useState(null);
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
    console.log("sad: containerSelected", containerSelected);
    // TODO: this was changed out the test, I've fixed from (containerSelected)
    // when is 0 the validation is false so the conditional never enter when the
    // index is 0.
    if (containerSelected !== null) {
      setActiveContainer(containerList.data.containers[containerSelected]);
    }
  }, [containerSelected]);

  return (
    <div className={styles.containers}>
      <div className={styles.containersWrapper}>
        <ContainerList
          containerSelected={containerSelected}
          setContainerSelected={setContainerSelected}
          containerList={containerList}
        />
        {activeContainer && <Container activeContainer={activeContainer} />}
      </div>
    </div>
  );
};

export default Containers;
