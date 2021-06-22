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
    return containerList.data.containers.map((container, index) => {
      const isSelectedTrue = index === containerSelected;
      return (
        <div class={styles.containerListItem}>
          <ContainerItem
            key={index}
            index={index}
            name={container.name}
            setContainerSelected={setContainerSelected}
          />
          {isSelectedTrue && <div class={styles.selectedContainer} />}
        </div>
      );
    });
  };

  return <div className={styles.containerList}>{isSuccess()}</div>;
};

export default ContainersList;
