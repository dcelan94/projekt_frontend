import styled from "styled-components"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Products from "../components/Products"

const Container = styled.div`

`
const Title = styled.h1`
  margin: 20px;
` 
const ProductList = () => {
  return (
    <Container>
        <Navbar/>
        <Title>Odjeća</Title>
        <Products />
        <Footer />
    </Container>
  )
}

export default ProductList