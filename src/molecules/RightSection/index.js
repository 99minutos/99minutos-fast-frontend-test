import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
overflow-y: scroll;
`
const Title = styled.h2`
`
const Span = styled.span`
    color: gray;
`
const ItemContainer = styled.div`
    display: flex;
    align-items: center;
    border: solid 1px gray; 
    border-radius: 5px;
    width: 80%;
    padding: 5px;
    margin: 5px;
    
`
const TextContainer = styled.div`
    margin-left: 1rem;
`
const Image = styled.img``
const IconContainer = styled.div``
const Notice = styled.div`
display: flex;
align-items: center;
justify-content: center;
font-weight: 600;
font-size: 2rem;
color: #83c634;
`
const RightSection = ({selectedElement}) => {
    return ( 
      <Container>
        <Title>Orders | <Span>Container {selectedElement && selectedElement.name} </Span></Title>
        {!selectedElement && (
            <Notice><p>Please select a container</p></Notice>
          
        )}
        {selectedElement && selectedElement.orders.length === 0 && (
            <Notice><p>Sorry, don't have elements, try other container</p></Notice>
        )}
        {selectedElement && selectedElement.orders.map((element) => (
        <ItemContainer key={element.counter}>
          <IconContainer>
            <Image src={`${element.type === "Same Day" ? "/icons/check.png" : "/icons/24-hours.png"}`} />
          </IconContainer>
          <TextContainer>
            <p>{element.counter}</p>
            <p>{element.type}</p>
          </TextContainer>
          
        </ItemContainer>
      ))}
      </Container>
     );
}
 
export default RightSection
