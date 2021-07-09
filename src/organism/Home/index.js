import React from 'react'
import LeftSection from "../src/molecules/LeftSection"
import RightSection from "../src/molecules/RightSection"
const Container = styled.div`
  width: 80vw;
  box-shadow: 3px 2px 5px gray;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 1rem;
   height: 80vh;
  padding: 2rem;
  border-radius: 0.5rem;
`

const Home = () => {
  const [data, setData] = useState()
  const [selectedElement, setSelectedElement] = useState()
  useEffect(async () => {

   const res = await fetch('http://localhost:3000/api/containers')
   const response = await res.json()
   setData(response.data.containers)
    
  }, [])
  const selectElement = (element) => {
    const selectedData = data.filter((item) => item.name === element)
    setSelectedElement(selectedData[0])
  }
    return ( 
      <Container>
        <RightSection items={data} selectElement={selectElement} />
        
        <LeftSection selectedElement={selectedElement} />
      </Container>
     )
}
 
export default Home