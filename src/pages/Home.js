import styled from "styled-components";
import background from '../assets/background.svg';
import plumbing from '../assets/plumbing2.svg';
import electric from '../assets/electric.svg';
import product from '../assets/SlashScreen.png';
import { contents, link } from "../constants/data";
import { LangContext } from "../context/LangContext";
import { useContext } from "react";

export default function Home() {
  const {language} = useContext(LangContext);
  const {
    title, 
    about_description,
    solution_title,
    solution1,
    solution2,
    solution3,
    product_title,
    product_description
  } = contents[language];

  return (
    <Wrapper>
      <Container>
        <SectionLeft>
          <Title>{title}</Title>
          <Row>
            <a href={link.android} target='_blank'>
              <Button>Android</Button>
            </a>
            <a href={link.ios} target='_blank'>
              <Button>IOS</Button>
            </a>
          </Row>
        </SectionLeft>
        <SectionRight>
          <Background 
            alt='bg'
            src={background}
          />
        </SectionRight>
      </Container>
      <div id="solution">
        <Subtitle>{solution_title}</Subtitle>
        <Feature>
          <div>
            <Image 
              alt='bg'
              src={background}
            />
            <Description center>{solution1}</Description>
          </div>
          <div>
            <Image
              alt='bg'
              src={electric}
            />
            <Description center>{solution2}</Description>
          </div>
          <div>
            <Image
              alt='bg'
              src={plumbing}
            />
            <Description center>{solution3}</Description>
          </div>
        </Feature>
      </div>
      <div id='product'>
        <Product>
          <div>
            <Subtitle>{product_title}</Subtitle>
            <Description>{product_description}</Description>
            <Row>
              <a href={link.android} target='_blank'>
                <Button>Android</Button>
              </a>
              <a href={link.ios} target='_blank'>
                <Button>IOS</Button>
              </a>
            </Row>
          </div>
          <div>
            <Background 
              alt='product'
              src={product}
            />
          </div>
        </Product>
      </div>
    </Wrapper>
  )
}

/** Styling */

const Wrapper = styled.div`
  max-width: 1216px;
  margin: auto;
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0 10px;
  }
`
const Container = styled.div`
  padding: 10rem 0;
  display: flex;
  justify-content: space-between;
  @media ${(props) => props.theme.breakpoints.md} {
    display: initial;
    padding: 0 10px;
  }
`
const SectionLeft = styled.div`
  flex: 1;
`
const SectionRight = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`
const Row = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 10px;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: auto;
  }
`
const Title = styled.h1`
  flex: 1;
  color: #FFF;
  font-size: 55px;
  margin-top: 0;
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 50px;
  }
`
const Subtitle = styled.p`
  font-size: 50px;
  font-weight: 600;
  color: #FFFF00;
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 32px;
  }
`
const Background = styled.img`
  width: 600px;
  height: auto;
  padding: 10px 0;
  @media ${(props) => props.theme.breakpoints.sm} {
    max-width: 340px;
    max-height: 340px;
  }
`
const Image = styled.img`
  width: 100%;
  height: 300px;
`
const Button = styled.button`
  width: 100%;
  height: 60px;
  border: none;
  border-radius: 5px;
  background: #FFFF00;
  color: ${props => props.theme.colors.background};
  transition: .4s;
  cursor: pointer;
  :hover {
    background: #e5e600;
  }
`
const Feature = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 10px;
  padding: 4rem 0;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: auto;
    padding: 0;
  }
`
const Description = styled.p`
  color: #FFF;
  font-size: 20px;
  text-align: ${props => props.center ? 'center' : 'start'};
`
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4rem 0;
  @media ${(props) => props.theme.breakpoints.md} {
    display: initial;
    padding: 0;
  }
`