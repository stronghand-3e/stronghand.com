import { useContext, useState } from "react";
import { scroller } from 'react-scroll'
import { NavLink as NaviLink } from "react-router-dom";
import { useHistory } from "react-router-dom";

import styled from "styled-components";
import logo from '../assets/logo_name.png';
import menu from '../assets/menu.svg';
import en from '../assets/en.png';
import kh from '../assets/kh.png';
import { contents } from "../constants/data";
import { LangContext } from "../context/LangContext";

export default function Header() {
  const history = useHistory();
  const [show, setShow] = useState(false);
  const {ChangeLang, language} = useContext(LangContext);
  const {navbar} = contents[language];

  const scrollTarget = (target) => scroller.scrollTo(target, {smooth: true, duration: 700});
  const scrollToPage = async (target) => {
    if (history.location.pathname !=='/') {
      await history.push('/');
    }
    scrollTarget(target);
  };

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
          <Link onClick={() => scrollToPage('solution')}>Solution</Link>
          <Link onClick={() => scrollToPage('product')}>Product</Link>
          <Route to='/about'>{navbar[2]}</Route>
        </Wrapper>
        <LangContainer>
          <img 
            src={en}
            alt='en'
            width={30}
            height={30}
            onClick={() => ChangeLang('en')}
          />
          <img 
            src={kh}
            alt='en'
            width={30}
            height={30}
            onClick={() => ChangeLang('kh')}
          />
        </LangContainer>
        <Menu 
          src={menu}
          alt='menu'
          onClick={() => setShow(!show)}
        />
      </Container>
      <Sidebar show={show}>
        <MobileNav onClick={() => scrollToPage('solution')}>{navbar[0]}</MobileNav>
        <MobileNav onClick={() => scrollToPage('product')}>{navbar[1]}</MobileNav>
        <MobileRoute to='/about'>{navbar[2]}</MobileRoute>
        <div style={{textAlign: 'center'}}>
          <img 
            src={en}
            alt='en'
            width={30}
            height={30}
            style={{marginRight: '5px'}}
            onClick={() => ChangeLang('en')}
          />
          <img 
            src={kh}
            alt='en'
            width={30}
            height={30}
            style={{marginLeft: '5px'}}
            onClick={() => ChangeLang('kh')}
          />
        </div>
      </Sidebar>
    </div>
  )
}

const Container = styled.div`
  max-width: 1216px;
  height: 100px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 1216px) {
    padding: 0 10px;
  }
`
const Logo = styled.img`
  width: auto;
  height: 80px;
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
const LangContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 20px;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: none;
  }
`
const Link = styled.div`
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
const MobileNav = styled.div`
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