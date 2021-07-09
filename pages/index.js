import Head from "next/head"
import { useEffect, useState } from "react"
import styled from "styled-components"

const Container = styled.div`
  width: 80vw;
  border: solid 1px black;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 1rem;
`
const RightSection = styled.div`

`
const LeftSection = styled.div`

`
const Title = styled.h2`
`
const Item = styled.div``
export default function Home() {
  const [data, setData] = useState()
  const [selectedElement, setSelectedElement] = useState()
  useEffect(async () => {

   const res = await fetch('http://localhost:3000/api/containers')
   const response = await res.json()
   setData(response.data.containers)
    
  }, [])
  console.log(data)
  const selectElement = (element) => {
    const selectedData = data.filter((item) => item.name === element)
    setSelectedElement(selectedData[0])
  }
  
  return (
    <Container>
      <RightSection>
        <Title>Containers</Title>
        {data && data.map((item) => (
          <Item onClick={() => selectElement(item.name)}><p>{item.name}</p></Item>
        ))}
      </RightSection>
      <LeftSection>
        <Title>Orders| Container {selectedElement && selectedElement.name}</Title>
        {selectedElement && selectedElement.orders.map((element) => (
        <>
          <p>{element.counter}</p>
          <p>{element.type}</p>
        </>
      ))}
      </LeftSection>
      
    </Container>
  );
}
