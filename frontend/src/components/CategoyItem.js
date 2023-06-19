
import styled from "styled-components"

const Container = styled.div`
    flex: 1;
    margin: 5px;
    height: 25vw;
    position: relative;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
`
const Info = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Title = styled.h1`
    font-size: 35px;
    margin-bottom: 15px;
    background-color: lavender;
    opacity: 0.7;
`
const Button = styled.button`
    border-radius: 15%;
    border-color: grey;
    padding: 5px;
    background-color: lavender;
    color: grey;
    cursor: pointer;
`
const CategoyItem = ({item}) => {
  return (
    <Container>
        <Image src={item.img} />
        <Info>
            <Title>{item.title}</Title>
            <Button>VIŠE</Button>
        </Info>
    </Container>
  )
}

export default CategoyItem