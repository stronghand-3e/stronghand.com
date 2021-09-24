import styled from "styled-components";
import logo from '../assets/logo_name.png';
import telegram from '../assets/telegram.svg';
import facebook from '../assets/facebook.svg';
import linkedin from '../assets/linkedin.svg';
import { link } from "../constants/data";

export default function Footer() {
  return (
    <div>
      <Line />
      <Container>
        <div>
        <Logo 
          alt='logo'
          src={logo}
        />
        </div>
        <div>
          <p>About</p>
          <p>Privacy & Policy </p>
          <p>Term Of Use</p>
        </div>
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
      <p align="center">Copyright © 2021</p>
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
  @media screen and (max-width: 1216px) {
    padding: 0 10px;
  }
`
const Logo = styled.img`
  width: 150px;
  height: auto;
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