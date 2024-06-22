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
      <Copy>Школа «Конспект» © 2023-{new Date().getFullYear()}</Copy>
      <StyledLink style={{ alignSelf: 'end' }} href={policy} target='_blank' rel='noopener noreferrer'>
        <Copy style={{ color: 'var(--accent)' }}>Политика конфиденциальности</Copy>
      </StyledLink>
      <StyledLink style={{ alignSelf: 'end' }} href={oferta} target='_blank' rel='noopener noreferrer'>
        <Copy style={{ color: 'var(--accent)' }}>Оферта</Copy>
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
      {/* <VertFlexIP>
        <Copy style={{ fontSize: '11px'}}>ИП Шевченко Валерий Сергеевич</Copy>
        <Copy style={{ fontSize: '11px'}}>ИНН 632147018327</Copy>
        <Copy style={{ fontSize: '11px'}}>ОГРНИП 324632700039473</Copy>
        <Copy style={{ fontSize: '11px'}}>konspekt@yandex.ru</Copy>
        <Copy style={{ fontSize: '11px'}}>+79162243606</Copy>
        <Copy style={{ fontSize: '11px'}}>г. Тольятти</Copy>
      </VertFlexIP> */}

    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: end;
margin-top: 80px;
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

const VertFlexIP = styled(VertFlex)`
gap: 0px;
@media (max-width: ${mediaQueries.phone}) {
display: none;
}
`
