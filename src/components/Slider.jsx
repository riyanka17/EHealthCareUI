import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import masterstrokesale from '../images/masterstrokesale25.jpg';

const Container=styled.div`
      width: 100%;
      height: 100vh;
      display: flex;
      position: relative;
`;

const Arrow=styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=>props.direction === "left" && "10px"};
    right: ${props=>props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
`;

const Wrapper=styled.div`
   height: 100%;
`;

const Slide=styled.div`
   width: 100vw;
   height: 100vh;
   display: flex;
   align-items: center;
`;

const ImageContainer=styled.div`
   height: 100%;
   flex: 1;
`;

const InfoContainer=styled.div`
   flex: 1;
   padding: 50px;
`;

const Title=styled.h1`
     font-size: 70px;
`;

const Description=styled.p`
     margin: 50px 0px;
     font-size: 20px;
     font-weight: 500;
     letter-spacing: 3px;
`;

const Button=styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`;
const Image=styled.img`
   height: 80%;
`;

export const Slider = () => {
  return (
    <Container>
        <Arrow direction="left">
            <ArrowLeftOutlined/>
        </Arrow>
        <Wrapper>
            <Slide>
            <ImageContainer>
               <Image src={masterstrokesale}/>
           </ImageContainer>
           <InfoContainer>
               <Title>
                    Dell-FSD EHealthCare's MasterStroke
               </Title>
               <Description>
                   Place your first order and get Flat 25% Off!
               </Description>
               <Button>
                   SHOP NOW
               </Button>
           </InfoContainer>
            </Slide>
        </Wrapper>
        <Arrow direction="right">
            <ArrowRightOutlined/>
        </Arrow>
    </Container>
  )
}
