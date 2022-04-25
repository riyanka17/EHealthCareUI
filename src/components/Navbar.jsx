import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
     height: 60px;
`;
const Wrapper=styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Left=styled.div`
     flex: 1;
`;

const Right=styled.div`
     flex: 1;
     display: flex;
     align-items: center;
     justify-content: flex-end;
`;
const Centre=styled.div`
     flex: 1
`;
const PageName=styled.h1`
     cursor: pointer;
     font-weight: bold;
`;
const SearchContainer=styled.div`
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`;
const Input=styled.input`
    border: none;
`;

const MenuItem=styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
`;

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <PageName>Dell-FSD EHealthCare</PageName>
            </Left>
            <Centre>
            <SearchContainer>
                    <Search style={{color:"gray",fontSize:16}}>
                        <Input></Input>
                    </Search>
            </SearchContainer>
            </Centre>
            <Right>
                <MenuItem>REGISTER</MenuItem>
                <MenuItem>SIGN IN</MenuItem>
                <MenuItem>
                   <Badge badgeContent={4} color="primary">
                       <ShoppingCartOutlined/>
                   </Badge>
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar