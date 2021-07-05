import Head from "next/head";
import styles from "../styles/Home.module.css";
import Container from '../components/Container';

export default function Home() {
  return (
    <div className={styles.mainTitle}>
      <h1>99minutos Fast Frontend Test</h1>
      <Container/>
    </div>
  );
}
