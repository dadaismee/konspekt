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
    <Wrapper>
      <Link to='/'>
        <Logo>Конспект</Logo>
      </Link>

      <Navbar>
        {links.map((link) => (
          <AnchorLinkEl key={link.name} to={link.url}>
            {link.name}
          </AnchorLinkEl>
        ))}
      </Navbar>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
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
