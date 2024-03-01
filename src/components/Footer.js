import React from 'react';
import { styled } from 'styled-components';
import code from '../assets/code.png';
import palette from '../assets/palette.png';
import { mediaQueries } from '../styles/GlobalStyles';
import { FooterText } from '../styles/TextStyles';
import { StyledLink } from './RequestForm';

const Footer = () => {
  return (
    <Wrapper>
      <Copy>Онлайн-школа «Конспект» © {new Date().getFullYear()}</Copy>
      <StyledLink href='/privacy' target='_blank' rel='noopener noreferrer'>
        <Copy>Политика конфиденциальности</Copy>
      </StyledLink>
      <Branding>
        <Image src={palette} />
        /
        <Image src={code} style={{ marginRight: '5px' }} />
        <Copy>
          by{' '}
          <a href='https://valerii.sh' target='_blank'>
            v—sh
          </a>
        </Copy>
      </Branding>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 120px 0 20px;
  gap: 5px;

  @media (max-width: ${mediaQueries.phone}) {
    margin: var(--padding-mobile);
    margin-top: 80px;
  }
`;

const Copy = styled(FooterText)`
  font-weight: 700;
`;
const Branding = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1px;

  @media (max-width: ${mediaQueries.phone}) {
    display: none;
  }
`;
const Image = styled.img`
  max-height: 16px;
`;
