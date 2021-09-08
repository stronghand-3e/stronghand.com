import styled from "styled-components";
import logo from '../assets/logo.svg';
import telegram from '../assets/telegram.svg';
import facebook from '../assets/facebook.svg';
import linkedin from '../assets/linkedin.svg';
import { link } from "../constants/data";

export default function Footer() {
  return (
    <div>
      <Line />
      <Container>
        <Logo 
          alt='logo'
          src={logo}
        />
        <p>Copyright © 2021</p>
        <RightSection>
          <a href={link.fb} target='_blank'> 
            <Social
              alt='facebook'
              src={facebook}
            />
          </a>
          <a href={link.telegram} target='_blank'>
            <Social
              alt='telegram'
              src={telegram}
            />
          </a>
          <a href={link.linkedin} target='_blank'>
            <Social
              alt='linkedin'
              src={linkedin}
            />
          </a>
        </RightSection>
      </Container>
    </div>
  )
}

const Line = styled.div`
  height: 1px;
  background-color: #00b300;
`
const Container = styled.div`
  max-width: 1216px;
  height: 120px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Logo = styled.img`
  width: 60px;
  height: 60px;
`
const RightSection = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 20px;
`
const Social = styled.img`
  width: 40px;
  height: 40px;
`