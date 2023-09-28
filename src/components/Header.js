import { motion } from 'framer-motion';
import { Link } from 'gatsby';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import React from 'react';
import { styled } from 'styled-components';
import { mediaQueries } from '../styles/GlobalStyles';

const Header = () => {
  const links = [
    {
      name: 'о чём курс',
      url: '#about',
    },
    {
      name: 'результат',
      url: '#results',
    },
    {
      name: 'процесс',
      url: '#process',
    },
    {
      name: 'тарифы',
      url: '#pricing',
    },
    {
      name: 'контакты',
      url: '#contact',
    },
  ];

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
        <Logo>Конспект</Logo>
        {/* <Image src={logo} alt='Logo' /> */}
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
`;

const Logo = styled.p`
  font-size: 32px;
  transition: var(--transition);
  color: var(--accent);

  @media (max-width: ${mediaQueries.phone}) {
    font-size: 6vw;
  }
`;

const Navbar = styled.nav`
  display: flex;
  gap: 40px;

  @media (max-width: ${mediaQueries.phone}) {
    display: none;
  }
`;

const AnchorLinkEl = styled(AnchorLink)`
  font-size: 24px;
  transition: var(--transition);

  &:hover {
    color: var(--accent);
  }
`;

const Image = styled.img`
  width: 40px;
  height: 100%;
`;
