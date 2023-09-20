import React from 'react';
import { styled } from 'styled-components';
import code from '../assets/code.png';
import palette from '../assets/palette.png';
import { mediaQueries } from '../styles/GlobalStyles';
import { FooterText } from '../styles/TextStyles';

const Footer = () => {
  return (
    <Wrapper>
      <Copy>Конспект © {new Date().getFullYear()}</Copy>
      <Branding>
        <Image src={palette} />
        /
        <Image src={code} style={{ marginRight: '5px' }} />
        <Copy>
          by{' '}
          <a href='https://valerii.sh' target='_blank'>
            v-sh
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
  margin-top: 180px;
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
