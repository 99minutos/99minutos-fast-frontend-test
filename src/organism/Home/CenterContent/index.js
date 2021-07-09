import React from 'react'
import styled from 'styled-components'

const GeneralContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

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

const CenterContent = ({children}) => {
    return ( 
      <GeneralContainer>
        <Container>{children}</Container>
      </GeneralContainer>
     )
}
 
export default CenterContent