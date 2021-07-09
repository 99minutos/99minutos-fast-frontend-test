import React from 'react'
import styled from 'styled-components'  
import Loading from '../../atoms/Loading'

const Container = styled.div`

`
const Item = styled.div`
    cursor: pointer;
    color: ${({isSelected}) => isSelected ?  "white" : "#83c634"};
    border: solid 1px ${({isSelected}) => isSelected ?  "white" : "#83c634"};
    background: ${({isSelected}) => isSelected ? "#83c634" : "white"};
    ${({isSelected}) => console.log(isSelected)};
    font-weight: 800;
    width: 60%;
    margin: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.5rem;
`
const Title = styled.h2`
    
`

const LeftSection = ({items, selectElement, selectedElement}) => {
    return ( 
      <Container>
        <Title>Containers</Title>
        {!items && (
          <Loading />
        )}
        {items && items.map((item) => (
          <Item key={item.name} isSelected={selectedElement && selectedElement.name === item.name} onClick={() => selectElement(item.name)}><p>{item.name}</p></Item>
        ))}
      </Container>
     );
}
 
export default LeftSection;