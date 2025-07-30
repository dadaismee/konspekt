import { motion } from 'framer-motion';
import { Link, GatsbyImage } from 'gatsby';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import React from 'react';
import { styled } from 'styled-components';
import { Flex, VertFlex, mediaQueries } from '../styles/GlobalStyles';
import logo from '../assets/logo-with-bg.png';
import { MainText, SmallerText } from '../styles/TextStyles';

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
        <Flex style={{ alignItems: "center"}}>
          <Logo src={logo} alt={logo} />
            <VertFlex style={{ display: "block"}}>
            <SmallerText>Konspekt</SmallerText>
            <SmallerText>school</SmallerText>
            </VertFlex>
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
      </Navbar>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled(motion.header)`
  display: flex;
  justify-content: space-between;
  align-items: center;

@media (max-width: ${mediaQueries.phone}) {
 display: none;
}
`;

export const Logo = styled.img`
  width: 60px;
  height:60px;
  border-radius: 15px;
  transition: var(--transition);

  @media (max-width: ${mediaQueries.phone}) {
    font-size: 6vw;
  }
`;

const Navbar = styled.nav`
  display: flex;
  gap: 20px;

  @media (max-width: ${mediaQueries.phone}) {
    display: none;
  }
`;

const AnchorLinkEl = styled(AnchorLink)`
  font-size: 20px;
  transition: var(--transition);

  &:hover {
    color: var(--accent);
  }
`;

const Image = styled.img`
  width: 40px;
  height: 100%;
`;
