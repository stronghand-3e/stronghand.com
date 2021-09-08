import styled from "styled-components"
import logo from '../assets/logo.svg'
import { data } from "../constants/data"

export default function About() {
  return (
    <Wrapper>
      <Container>
        <LeftSection>
          <Logo 
            src={logo}
            alt='logo'
          />
        </LeftSection>
        <RightSection>
          <Title>{data.about_title}</Title>
          <Description>{data.about_description}</Description>
        </RightSection>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  max-width: 1216px;
  height: calc(100vh - 190px);
  margin: auto;
  padding: 10rem 0;
  @media ${(props) => props.theme.breakpoints.md} {
    display: initial;
    padding: 20px 10px;
  }
`
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  @media ${(props) => props.theme.breakpoints.md} {
    display: initial;
  }
`
const Logo = styled.img`
  width: 250px;
  height: 250px;
`
const Title = styled.p`
  font-size: 50px;
  font-weight: 600;
  @media ${(props) => props.theme.breakpoints.md} {
    text-align: center;
  }
`
const Description = styled.p`
  color: #FFF;
  font-size: 20px;
  @media ${(props) => props.theme.breakpoints.md} {
    text-align: center;
  }
`
const LeftSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`
const RightSection = styled.div`
  flex: 1;
`