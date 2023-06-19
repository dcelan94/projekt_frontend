import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Add, Padding, Remove } from '@mui/icons-material'

const Container =styled.div`
`
const Wrapper =styled.div`
    padding: 20px;
`
const Title =styled.h1`
    font-weight: 300;
    text-align: center;
`
const Top =styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const TopBottom =styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    margin-bottom: 25px;


`
const Bottom =styled.div`
display: flex;
justify-content: space-between;
`;
const Info =styled.div`
flex:3
`;
const Product =styled.div`
display: flex;
justify-content: space-between;
`;
const ProductDetail =styled.div`
flex:2;
display:flex;
`;
const Image =styled.img`
width:200px;
`;
const Details =styled.div`
padding:20px;
display:flex;
flex-direction:column;
justify-content: space-around;
`;
const ProductName =styled.span`
`;
const ProductId =styled.span`
`;
const ProductColor =styled.span`
width: 20px;
height: 20px;
border-radius:50% ;
background-color:${props=>props.color} ;
`;
const ProductSize =styled.span`
`;
const PriceDetail =styled.div`
flex:1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`;

const ProductAmountContainer =styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;
`;
const ProductAmount =styled.div`
font-size: 24px;
margin: 5px;
`;
const ProductPrice =styled.div`
font-size:30px;
font-weight:200;
`;

const Summary =styled.div`
flex:1;
border: 0.5px solid lightgrey;
border-radius: 10px;
padding: 20px;
height: 50vh;
`;
const SummaryTitle =styled.h1`
font-weight: 200;
`;

const SummaryItem =styled.div`
margin: 30px 0px;
display: flex;
justify-content:space-between ;
font-weight:${props=>props.type ==="total" && "500"};
font-size:${props=>props.type ==="total" && "24px"};
`;
const SummaryItemText =styled.span`
`;
const SummaryItemPrice =styled.span`
`;

const Button =styled.button`
width:100%;
padding:10 px;
background-color:black;
color:white;
font-weight: 600;

`;


const Cart = () => {
  return (
    <Container>
        <Navbar/>
        <Wrapper>
            <Title>Košarica</Title>
            <Top>
                <TopBottom>Nastavi kupnju</TopBottom>
                <TopBottom>Idi na plaćanje</TopBottom>
            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <ProductDetail>
                            <Image src={require("../images/haljina.jpg")}/>
                            <Details>
                                <ProductName>haljina</ProductName>
                                <ProductId>ID:</ProductId>
                                <ProductColor color='black'/>
                                <ProductSize></ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Remove />
                                <ProductAmount>2</ProductAmount>
                                <Add/>
                                

                            </ProductAmountContainer>
                            <ProductPrice>€ 30</ProductPrice>
                        </PriceDetail>
                    </Product>
                </Info>
                <Summary>
                    <SummaryTitle>Narudžba</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Cijena proizvoda</SummaryItemText>
                        <SummaryItemPrice>2 €</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Dostava</SummaryItemText>
                        <SummaryItemPrice>3 €</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText type="total">Ukupno</SummaryItemText>
                        <SummaryItemPrice>5 €</SummaryItemPrice>
                    </SummaryItem>
                    <Button>IDI NA PLAĆANJE</Button>
                </Summary>

            </Bottom>
        </Wrapper>
        <Footer />
    </Container>
  )
}

export default Cart