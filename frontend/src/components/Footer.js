import { Facebook, Instagram, MailOutline, Phone, Room, Twitter } from "@mui/icons-material"
import styled from "styled-components"

const Container = styled.div`
    display: flex;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1`
    
`
const Desc = styled.p`
    margin: 15px 0px;
`
const Center = styled.div`
    flex: 1;
    padding: 35px;
    display: flex; 
    flex-direction: column; 
`
const SocilaConteiner = styled.div`
    display: flex;
    align-items: center;
    margin-top: 5px;;
`
const Socila = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    margin-right: 20px;
    cursor: pointer;
`
const Title = styled.h3`
    margin-bottom: 30px;
    display: flex;
`
const Right = styled.div`
    flex: 1;
    padding: 35px;
`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`
const Payment = styled.img`
    width: 50%;
`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>ONLINE FASHION SHOP</Logo>
            <Desc>  U našoj ponudi možete pronaći odjeću i obuću. Nudimo široku ponudu za žene.
            </Desc>
        </Left>

        <Center>
            <Title>Zapratite nas</Title>
            <SocilaConteiner>
                <Socila color = "3B5999"> 
                    <Facebook/>
                </Socila>
                <Socila color = "E4405F">
                    <Instagram/>
                </Socila>
                <Socila color = "55ACEE">
                    <Twitter/>
                </Socila>
            </SocilaConteiner>
        </Center>
        
        <Right>
            <Title>Kontakt</Title>
            <ContactItem><Room style={{marginRight:"10px"}} />
                Poljička cesta 11, 21000 Split
            </ContactItem>
            
            <ContactItem><MailOutline style={{marginRight:"10px"}} />
                online_fashion@gmail.com
            </ContactItem>
            <ContactItem><Payment src = {require("../images/cards.jpg")}/>
           
            </ContactItem>
            
        </Right>
    </Container>
  )
}

export default Footer