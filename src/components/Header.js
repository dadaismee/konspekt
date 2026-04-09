import { motion } from 'framer-motion';
import { Link, GatsbyImage } from 'gatsby';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import React from 'react';
import { styled } from 'styled-components';
import { Flex, VertFlex, mediaQueries } from '../styles/GlobalStyles';
import logo from '../assets/logo-with-bg.png';
import { MainText, MenuAndFootnote, SmallerText } from '../styles/TextStyles';
import { Button } from './Hero';

const Header = ({ data }) => {
  const links = data;
  return (
    <Wrapper
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: 20,
      }}
      transition={{
        ease: [0.165, 0.84, 0.44, 1],
        duration: 1,
        delay: 0.1,
      }}
      viewport={{ once: true }}>

      <Link to='/'>
        <Flex style={{ gap: "10px", alignItems: "center" }}>
          <Logo src={logo} alt={logo} />
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "start" }}>
            {/* <MenuAndFootnote>Школа</MenuAndFootnote> */}
            <MenuAndFootnote>Конспект</MenuAndFootnote>
          </div>
        </Flex>
      </Link>

      <Navbar>
        {links.map((link, index) => (
          <AnchorLinkEl
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: 20,
            }}
            transition={{
              ease: [0.165, 0.84, 0.44, 1],
              duration: 1,
              delay: 0.1 + index * 0.05,
            }}
            viewport={{ once: true }}
            key={link.name}
            to={link.url}>
            {link.name}
          </AnchorLinkEl>
        ))}
		<Button to="https://konspekt.zenclass.ru/public/course/731e4edc-9279-40a8-ad40-668820810803" fontSize="20px" width="180px" height="40px">Начать бесплатно</Button>

      </Navbar>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled(motion.header)`
  display: flex;
  width: auto;
  padding: 5px 60px;
  justify-content: space-between;
  // border-bottom: 1px solid rgba(0,0,0,0.2);
  align-items: center;
  position: -webkit-sticky;
  position: sticky;
  top: 0px;
  background-color: var(--main);
  z-index: 1000;

@media (max-width: ${mediaQueries.phone}) {
 display: none;
}
`;

export const Logo = styled.img`
  width: 60px;
  height: 60px;
  border: 1px solid var(--text);
  border-radius: 15px;
  transition: var(--transition);

  @media (max-width: ${mediaQueries.phone}) {
    font-size: 6vw;
  }
`;

const Navbar = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: ${mediaQueries.phone}) {
    display: none;
  }
`;

const AnchorLinkEl = styled(AnchorLink)`
  font-size: 20px;
  font-family: Coolvetica Lite;
  transition: var(--transition);

  &:hover {
    color: var(--accent);
  }
`;

const Image = styled.img`
  width: 40px;
  height: 100%;
`;
