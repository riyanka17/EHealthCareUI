import { Add, Remove } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';

const Container=styled.div`
   
`;

const Wrapper=styled.div`
   padding: 20px;
`;

const Title=styled.h1`
   font-weight: 300;
   text-align: center;
`;

const Top=styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 20px;
`;

const TopButton=styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${props=>props.type==="filled" && "none"};
  background-color: ${props=>props.type==="filled" ? "black":"transparent"};
  color: ${props=>props.type==="filled" && "white"}
`;

const TopTexts=styled.div`
   
`;

const TopText=styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
  
`;

const Bottom=styled.div`
   display: flex;
   justify-content: space-between;
`;

const Info=styled.div`
   flex: 3;
   margin-bottom: 25px;
`;

const Product=styled.div`
   display: flex;
   justify-content: space-between;
`;

const ProductDetail=styled.div`
   flex: 2;
   display: flex;
`;

const Image=styled.img`
   width: 100px;
   height: 100px;
  

`;

const Details=styled.div`
   padding: 20px;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
`;

const ProductName=styled.span`
   flex: 3;
`;

const ProductId=styled.span`
   flex: 3;
`;

const ProductSize=styled.span`
   flex: 3;
`;

const PriceDetail=styled.div`
   flex: 1;
   display: flex;
   flex-direction: column
   align-items: center;
   justify-content: center;
`;

const ProductAmountContainer=styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
`;

const ProductAmount=styled.div`
  font-size: 24px;
  margin: 5px;
`;

const ProductPrice=styled.div`
  font-size: 30px;
  font-weight: 200;
`;

const Hr=styled.hr`
  
  border: none;
  height: 1px;
  padding-bottom: 20px;
`;


const Summary=styled.div`
   flex: 1; 
   border: 0.5px solid lightgray;
   border-radius: 10px;
   padding: 20px;
   height: 50vh;
`;

const SummaryTitle=styled.h1`
  font-weight: 200;
`;

const SummaryItem=styled.div`
   margin: 30px 0px;
   display: flex;
   justify-content: space-between;
   font-weight: ${props=>props.type==="total" && "500"};
   font-size: ${props=>props.type==="total" && "24px"};
`;

const SummaryItemText=styled.span`

`;

const SummaryItemPrice=styled.span`

`;

const Button=styled.button`
  width: 100%;
  padding: 10px;
  font-weight: 900;
  font-color: black;
  background-color: gray;
  cursor: pointer;
`;

const Cart = () => {
  return (
    <Container>
       <Navbar />
       <Announcement />
       <Wrapper>
           <Title>Your Cart</Title>
           <Top>
               <TopButton>Continue Shopping</TopButton>
               <TopTexts>
                   <TopText>Shopping Bag(2)</TopText>
                   <TopText>Your WishList(2)</TopText>
               </TopTexts>
               <TopButton type="filled">Checkout</TopButton>
           </Top>
           <Bottom>
               <Info>
                  <Product>
                      <ProductDetail>
                          <Image src="https://www.netmeds.com/images/product-v1/600x600/858136/inlife_vitamin_b12_tablets_60_s_0.jpg"/>
                          <Details>
                              <ProductName><b>Product:</b> INLIFE Vitamin B12 Tablets</ProductName>
                              <ProductId><b>ID:</b> 302</ProductId>
                              <ProductSize><b>Size: </b> 60 Tabs</ProductSize>
                          </Details>
                      </ProductDetail>
                      <PriceDetail>
                         <ProductAmountContainer>
                             <Add/>
                                <ProductAmount>1</ProductAmount>
                             <Remove/>
                         </ProductAmountContainer>
                         <ProductPrice>Rs.478.80</ProductPrice>
                      </PriceDetail>
                  </Product>
                  <Hr></Hr>
                  <Product>
                      <ProductDetail>
                          <Image src="https://m.media-amazon.com/images/I/61u-qC6Z-mL._AC_SX569_.jpg"/>
                          <Details>
                              <ProductName><b>Product:</b> Gold Standard Whey</ProductName>
                              <ProductId><b>ID:</b> 365</ProductId>
                              <ProductSize><b>Size: </b> 2.27KG</ProductSize>
                          </Details>
                      </ProductDetail>
                      <PriceDetail>
                         <ProductAmountContainer>
                             <Add/>
                                <ProductAmount>1</ProductAmount>
                             <Remove/>
                         </ProductAmountContainer>
                         <ProductPrice>Rs.6,999</ProductPrice>
                      </PriceDetail>
                  </Product>
               </Info>
               <Summary>
                   <SummaryTitle>Order Summary</SummaryTitle>
                   <SummaryItem>
                       <SummaryItemText>SubTotal</SummaryItemText>
                       <SummaryItemPrice>Rs.7477.80</SummaryItemPrice>
                   </SummaryItem>
                   <SummaryItem>
                       <SummaryItemText>Estimated Shipping</SummaryItemText>
                       <SummaryItemPrice>Rs.80</SummaryItemPrice>
                   </SummaryItem>
                   <SummaryItem>
                       <SummaryItemText>Shipping Discount</SummaryItemText>
                       <SummaryItemPrice>-Rs.80</SummaryItemPrice>
                   </SummaryItem>
                   <SummaryItem type="total">
                       <SummaryItemText>Total</SummaryItemText>
                       <SummaryItemPrice>Rs.7477.80</SummaryItemPrice>
                   </SummaryItem>
                   <Button>Checkout Now</Button>
               </Summary>
           </Bottom>
       </Wrapper>
    </Container>
  )
}

export default Cart