import React from 'react';
import { styled } from 'styled-components';
import code from '../assets/code.png';
import palette from '../assets/palette.png';
import { VertFlex, mediaQueries } from '../styles/GlobalStyles';
import { FooterText } from '../styles/TextStyles';
import { StyledLink } from './RequestForm';
import policy from '../assets/policy.pdf';
import oferta from '../assets/agreement.pdf';

const Footer = () => {
  return (
    <Wrapper>
      <Copy>Школа «Конспект» © {new Date().getFullYear()}</Copy>
      <div style={{ gap: '0px', alignContent: 'start'}}>
        <StyledLink href={policy} target='_blank' rel='noopener noreferrer'>
          <Copy style={{ color: 'var(--accent)'}}>Политика конфиденциальности</Copy>
        </StyledLink>
        <StyledLink href={oferta} target='_blank' rel='noopener noreferrer'>
          <Copy style={{ color: 'var(--accent)'}}>Оферта</Copy>
        </StyledLink>
      </div>
      <VertFlex style={{ gap: '0px'}}>
        <Copy style={{ fontSize: '11px'}}>ИП Шевченко Валерий Сергеевич</Copy>
        <Copy style={{ fontSize: '11px'}}>ИНН 632147018327</Copy>
        <Copy style={{ fontSize: '11px'}}>ОГРНИП 324632700039473</Copy>
        <Copy style={{ fontSize: '11px'}}>konspekt@yandex.ru</Copy>
        <Copy style={{ fontSize: '11px'}}>г. Тольятти</Copy>
      </VertFlex>
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
align-items: center;
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
