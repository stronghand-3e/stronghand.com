import styled from "styled-components";
import logo from '../assets/logo_name.png';
import telegram from '../assets/telegram.svg';
import facebook from '../assets/facebook.svg';
import linkedin from '../assets/linkedin.svg';
import { link } from "../constants/data";
import { NavLink } from "react-router-dom";

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
          <FooterItem to='/about'>About</FooterItem>
          <FooterItem to='privacy&policy'>Privacy & Policy </FooterItem>
          <FooterItem to='termofuse'>Term Of Use</FooterItem>
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
const FooterItem = styled(NavLink)`
  display: block;
  color: #fff;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  margin-bottom: 5px;
`