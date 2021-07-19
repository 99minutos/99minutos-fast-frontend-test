import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';
import Containers from '../Components/Containers/Containers';

export default function Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  async function fetchData() {
    const getData = await fetch('http://localhost:3000/api/containers');
    const dataToJson = await getData.json();

    setData(dataToJson);
    setLoading(false);
  }

  return (
    <div className={styles.mainTitle}>
      <Containers data={data.data.containers} />
    </div>
  );
}
