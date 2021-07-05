import Head from "next/head";
import styles from "../styles/Home.module.css";
import Container from "../components/Container";
import {useEffect, useState} from 'react'

export default function Home() {

  const [data, setData] = useState([])

  useEffect(async () => {
    const response = await fetch("http://localhost:3000/api/containers")
    const res = await response.json()
    //console.log(res)
    setData(res.data)
  }, [])

  const handledClick = (params) => {
    console.log(`params`, params)
  }
  

  return (
    <div className={styles.mainTitle}>
      <h1>99minutos Fast Frontend Test</h1>
      <Container data={data} handledClick={handledClick} />
    </div>
  );
}
