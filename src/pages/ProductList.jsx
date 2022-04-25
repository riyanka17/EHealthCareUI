import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Products from '../components/Products';

const Container=styled.div`

`;

const Title=styled.h1`
   margin: 20px;
`;

const FilterContainer=styled.div`
   display: flex;
   

`;

const Filter=styled.div`
   margin: 20px;
`;
const FilterText=styled.span`
   font-size: 20px;
   font-weight: 600;
   margin-right: 20px;
`;

const Select=styled.select`
  padding: 10px;
`;

const Option=styled.option`

`;

const ProductList = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Title>Popular Products</Title>
        <FilterContainer>
            <Filter><FilterText>Filter Products:</FilterText></Filter>
            <Select>
                <Option disabled selected>
                    Product
                </Option>
                <Option>Covid Essentials</Option>
                <Option>Fitness</Option>
                <Option>Skin Care</Option>
            </Select>
            <Filter><FilterText>Sort Products:</FilterText></Filter>
            <Select>
                <Option selected>Newest</Option>
                <Option>Price (asc)</Option>
                <Option>Price (desc)</Option>
            </Select>
        </FilterContainer>
        <Products/>
    </Container>
  )
}

export default ProductList