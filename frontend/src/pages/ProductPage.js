import { Add, Remove } from '@mui/icons-material'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Container = styled.div`
`
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`
const ImageContainer = styled.div`
    flex: 1;
`
const Image = styled.img`
    width: 70%;       
`
const InfoContainer = styled.div`
    flex: 2;
    padding: 0px 50px;  
`
const Title = styled.h1`
    font-weight: 50;
`
const Desc = styled.p`
    margin: 20px 0px;
`
const Price = styled.span`
    font-weight: 200;
    font-size: 40px;
`
const AddConrainer = styled.div`
    padding-top: 15px;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`
const Amount = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;align-items: center;
    justify-content: center;
    margin: 0px 5px;
`
const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;

    &:hover{
        background-color: whitesmoke;
    }
`

const ProductPage = () => {
  return (
    <Container>
        <Navbar />
        <Wrapper>
            <ImageContainer>
            <Image src = {require("../images/haljina.jpg")}/>
            </ImageContainer>
            <InfoContainer>
                <Title>Traper haljina</Title>
                <Desc></Desc>
                <Price></Price>

                <AddConrainer>
                    <AmountContainer>
                        <Remove />
                        <Amount>1</Amount>
                        <Add />
                    </AmountContainer>
                    <Button>Dodaj u košaricu</Button>
                </AddConrainer>
            </InfoContainer>
           
        </Wrapper>
        <Footer />
    </Container>
  )
}

export default ProductPage