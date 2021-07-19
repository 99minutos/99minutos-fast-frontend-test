import styles from './Buttons.module.css';

export default function Buttons({ containers, setSelectedContainer }) {
  const handleClick = () => {
    setSelectedContainer(containers.name);
  };

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={handleClick}>
        {containers.name}
      </button>
    </div>
  );
}
