import Head from "next/head";
import styles from "../styles/Home.module.css";
import Container from "../components/Container";

import { Provider } from "react-redux";
import { store } from "../store/store";

export default function Home() {
  return (
    <div className={styles.mainTitle}>
      <h1>99minutos Fast Frontend Test</h1>

      <Provider store={store}>
        <Container />
      </Provider>
    </div>
  );
}
