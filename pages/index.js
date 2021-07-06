import Head from "next/head";
import styles from "../styles/Home.module.css";
import Container from "../components/Container";
import Order from "../components/Order";
import {useEffect, useState} from 'react'


export default function Home() {

  //  State for the API response 
  const [apiResponse, setApiResponse] = useState([])

  // HTTP Request for get the required data
  useEffect( async () => {
    const response = await fetch("http://localhost:3000/api/containers")
    const res = await response.json()
    setApiResponse(res.data)
  }, [])

  // State for the selected container
  const [selectedContainer, setSelectedContainer] = useState([])

  // Get the selected Container
  const handledClick = (params) => {
    setSelectedContainer(params)
  }

  return (
    <div className={styles.body}>
      <div className={styles.card}>
        <div className={styles.container}>
          <Container data={apiResponse} handledClick={handledClick} selectedContainer={selectedContainer}  />
        </div>
        <div className={styles.order}>
          <Order data={apiResponse} selectedContainer={selectedContainer}  />
        </div>
        
      </div>
      <p className={styles.footer}>2021 Raúl Moreno</p>
    </div>
    
  );
}
