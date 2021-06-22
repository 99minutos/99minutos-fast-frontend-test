import React, { useState, useEffect } from "react";
import ContainerItem from "./ContainerItem";
import styles from "../../styles/Containers.module.css";

const ContainersList = ({
  containerList,
  setContainerSelected,
  containerSelected,
}) => {
  useEffect(() => {}, [containerList]);

  const isSuccess = () => {
    if (!containerList) return "no hubo info";
    return containerList.data.containers.map((container, index) => (
      <div class={styles.containerListItem}>
        <div>
          <p>{index === containerSelected && "selected"}</p>
        </div>
        <ContainerItem
          key={index}
          index={index}
          name={container.name}
          setContainerSelected={setContainerSelected}
        />
      </div>
    ));
  };

  return <div className={styles.containerList}>{isSuccess()}</div>;
};

export default ContainersList;
