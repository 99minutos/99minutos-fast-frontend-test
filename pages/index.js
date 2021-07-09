import { useEffect, useState } from "react"
import RightSection from "../src/molecules/RightSection"
import LeftSection from "../src/molecules/LeftSection"
import CenterContent from "../src/organism/Home/CenterContent"




export default function Home() {
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
    <CenterContent>
        <LeftSection items={data} selectElement={selectElement} selectedElement={selectedElement} />
        
        <RightSection selectedElement={selectedElement} />
    </CenterContent>
  );
}
