import React, { memo } from 'react'
import styled from 'styled-components'
import summaryImage from "../../assets/images/summaryImage.png"
 const MealSummary = () => {
  return (
    <Container>
      <Image src={summaryImage} alt="summary" />
    </Container>
  )
}
export default memo(MealSummary)


const Container = styled.div`
  width: 100%;
  `
const Image = styled.img`
  
width: 100%;
margin-top: 101px;
`