import React from "react";
import styles from "../../styles/Containers.module.css";

const ContainerItem = ({ name = "", index, setContainerSelected }) => {
  const onContainerItemClick = (e, index) => {
    e.preventDefault();
    setContainerSelected(index);
  };

  return (
    <div
      role="button"
      onClick={(e) => onContainerItemClick(e, index)}
      tabIndex={0}
      class={styles.containerItem}
    >
      <p>{name}</p>
    </div>
  );
};

export default ContainerItem;
