import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
     height: 30px;
     background-color: teal;
     color: white;
     display: flex;
     alignt-content: center;
     justify-content: center;
     font-size: 14px;
     font-weight: bold;
`;

const Announcement = () => {
  return (
    <Container>
        Free Shipping on Orders above Rs.1500!!
    </Container>
  )
}

export default Announcement