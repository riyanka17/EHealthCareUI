import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
   width: 100vw;
   height: 100vh;
   background: linear-gradient(
     rgba(255,255,255,0.5),
     rgba(255,255,255,0.5)
     ),
     url("https://lh3.googleusercontent.com/hcHWcMNBJdo7uYbVTeP5QmLegqqxpUjjUckXzGIIZFrryo-a3c0FLJm9N2n1oYm2nM96_Rx5NblxFu4kH-GH_Y9dg1nxR0mAdCQSNnE=h450") center;
     display: flex;
     align-items: center;
     justify-content: center;
     background-size: cover;
`;

const Wrapper=styled.div`
  padding: 20px;
  width: 40%;
  background-color: white;
`;

const Title=styled.h1`
  font-size: 24px;
  font-width: 300;
`;

const Form=styled.form`
  display: flex;
  flex-wrap: wrap;
`;



const Input=styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement=styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button=styled.button`
  width: 40%
  border: none;
  padding: 15px 20px;
  background-color: #FFB6C1;
  font-color: white;
  cursor: pointer;
  font-weight: bold;
`;

const Register = () => {
  return (
    <Container>
       <Wrapper>
         <Title>Create an account</Title>
         <Form>
           <Input placeholder="name"/>
           <Input placeholder=" last name"/>
           <Input placeholder="username"/>
           <Input placeholder="email"/>
           <Input placeholder="password"/>
           <Input placeholder="confirm password"/>
           <Agreement>By creating an account, I consent to the processing of my personal data in accordance
             with the <b>PRIVACY POLICY</b>
           </Agreement>
           <Button>Create</Button>
         </Form>
       </Wrapper>
    </Container>
  )
}

export default Register