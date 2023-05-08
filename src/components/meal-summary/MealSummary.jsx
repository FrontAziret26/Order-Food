import React from 'react'
import styled from 'styled-components'
import summaryImage from "../../assets/images/summaryImage.png"
export const MealSummary = () => {
  return (
    <Container>
      <Image src={summaryImage} alt="summary" />
    </Container>
  )
}


const Container = styled.div`
  width: 100%;
  `
const Image = styled.img`
  
width: 100%;
margin-top: 101px;
`