import { Add, Remove } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';

const Container=styled.div`

`;

const Wrapper=styled.div`
  padding: 50px;
  display: flex;
`;

const ImgContainer=styled.div`
   flex: 1;
`;

const Image=styled.img`
  height: 90vh;
  object-fit: cover;
`;

const InfoContainer=styled.div`
   flex: 1;
   padding: 0px 50px;
`;

const Title=styled.h1`
   

`;

const Desc=styled.p`
  margin: 20px 0px;
`;

const Price=styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer=styled.div`
   width: 50%;
   margin: 30px 0px;
   display: flex;
   justify-content: space-between;
`;

const Filter=styled.div`
   display: flex;
   align-items: center;
`;

const FilterTitle=styled.span`
   font-size: 20px;
   font-weight: 200;
`;

const FilterSizeOption=styled.option`
   width: 20px;
   height: 20px;
`;

const FilterPack=styled.select`
   margin-left: 10px;
   padding: 5px;

`;

const FilterPackOption=styled.option`

`;

const AddContainer=styled.div`
   width: 50%;
   display: flex;
   align-items: center;
   justify-content: space-between;
`;

const AmountContainer=styled.div`
   display: flex;
   align-items: center;
   font-weight: 700;
`;

const Amount=styled.span`
   width: 30px;
   height: 30px;
   border-radius: 10px;
   border: 1px solid teal;
   display: flex;
   align-items: center;
   justify-content: center;
   margin: 0px 5px;
`;

const Button=styled.button`
   padding: 15px;
   border: 2px solid teal;
   background-color: white;
   cursor: pointer;
   font-weight: 500;

   &:hover{
       background-color: #f8f4f4;
   }
`;

const Product = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <ImgContainer>
                <Image src="https://www.netmeds.com/images/product-v1/600x600/858136/inlife_vitamin_b12_tablets_60_s_0.jpg"/>
            </ImgContainer>
            <InfoContainer>
                <Title>INLIFE Vitamin B12 Tablets</Title>
                <Desc>INLIFE Healthcare Vitamin B12 with ALA supplement offers a wide range of benefits for men and women. This specially crafted 1500 mcg B12 (Methylcobalamin) formula improves the body's ability to convert foods into cellular energy. Lead a healthier lifestyle today. What Vitamin B-12 can do for you - Inlife's Vitamin B12 supports your body's metabolic function by helping it convert proteins, fats, and carbs into energy more efficiently. Get ready to feel alert, energized and in a great mood.</Desc>
                <Price>Rs.478.80</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Tablets</FilterTitle>
                        <FilterPack>
                        <FilterSizeOption>60</FilterSizeOption>
                        <FilterSizeOption>100</FilterSizeOption>
                        <FilterSizeOption>240</FilterSizeOption>
                        </FilterPack>
                    </Filter>
                    <Filter>
                        <FilterTitle>Pack Of</FilterTitle>
                        <FilterPack>
                        <FilterPackOption>1</FilterPackOption>
                        <FilterPackOption>3</FilterPackOption>
                        <FilterPackOption>5</FilterPackOption>
                        </FilterPack>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Remove/>
                        <Amount>1</Amount>
                        <Add/>
                    </AmountContainer>
                    <Button>ADD TO CART</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
    </Container>
  )
}

export default Product