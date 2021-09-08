import { useState } from "react";
import { Link as NavLink } from 'react-scroll'
import { NavLink as NaviLink } from "react-router-dom";
import styled from "styled-components";
import logo from '../assets/logo.svg';
import menu from '../assets/menu.svg';

export default function Header() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <Container>
        <NaviLink to='/'>
          <Logo 
            src={logo}
            alt='logo'
          />
        </NaviLink>
        <Wrapper>
          <Link to="solution" smooth={true} duration={500}>Solutions</Link>
          <Link to="product" smooth={true} duration={500}>Products</Link>
          <Route to='/about'>About</Route>
        </Wrapper>
        <Menu 
          src={menu}
          alt='menu'
          onClick={() => setShow(!show)}
        />
      </Container>
      <Sidebar show={show}>
        <MobileNav to="solution" spy={true} smooth={true}>Solutions</MobileNav>
        <MobileNav to="product" smooth={true} duration={500}>Products</MobileNav>
        <MobileRoute to='/about'>About</MobileRoute>
      </Sidebar>
    </div>
  )
}

const Container = styled.div`
  max-width: 1216px;
  height: 60px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0 10px;
  }
`
const Logo = styled.img`
  width: 50px;
  height: 50px;
`
const Menu = styled.img`
  width: 35px;
  height: 35px;
  cursor: pointer;
  @media screen and (min-width: 640px) {
    display: none;
  }
`
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 40px;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: none;
  }
`
const Link = styled(NavLink)`
  font-size: 20px;
  font-weight: 600;
  transition: 0.4s ease;
  color: #FFF;
  text-decoration: none;
  cursor: pointer;
`
const Route = styled(NaviLink)`
  font-size: 20px;
  font-weight: 600;
  transition: 0.4s ease;
  color: #FFF;
  text-decoration: none;
  cursor: pointer;
`
const MobileNav = styled(NavLink)`
  font-size: 20px;
  font-weight: 600;
  transition: 0.4s ease;
  color: ${props => props.theme.colors.background};
  text-decoration: none;
  display: block;
  text-align: center;
  padding: 20px 0;
  :hover {
    background-color: rgba(0, 128, 0, 0.2);
  }
`
const MobileRoute = styled(NaviLink)`
  font-size: 20px;
  font-weight: 600;
  transition: 0.4s ease;
  color: ${props => props.theme.colors.background};
  text-decoration: none;
  display: block;
  text-align: center;
  padding: 20px 0;
  :hover {
    background-color: rgba(0, 128, 0, 0.2);
  }
`
const Sidebar = styled.div`
  position: absolute;
  top: 10;
  left: 0;
  z-index: 99;
  background-color: #f5f5f5;
  width: 100%;
  padding: 2rem 0;
  transition: 0.6s all;
  transform: ${(props) => props.show ? 'translateY(0px)' : 'translateY(-50px)'};
  opacity: ${(props) => props.show ? '1' : '0'};
  visibility: ${(props) => props.show ? 'visible' : 'hidden'};;
`