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
      <VertFlex>
        <Copy>«Конспект» © {new Date().getFullYear()}</Copy>
      </VertFlex>
      <StyledLink style={{ alignSelf: 'end' }} href={policy} target='_blank' rel='noopener noreferrer'>
        <Copy style={{ textDecoration: "underline" }}>Политика конфиденциальности</Copy>
      </StyledLink>
      <StyledLink style={{ alignSelf: 'end' }} href={oferta} target='_blank' rel='noopener noreferrer'>
        <Copy style={{ textDecoration: "underline" }}>Оферта</Copy>
      </StyledLink>

      {/* <Branding> */}
      {/*   <Image src={palette} /> */}
      {/*   / */}
      {/*   <Image src={code} style={{ marginRight: '5px' }} /> */}
      {/*   <Copy> */}
      {/*     by{' '} */}
      {/*     <a href='https://vsdesigner.netlify.app/' target='_blank'> */}
      {/*       v—sh */}
      {/*     </a> */}
      {/*   </Copy> */}
      {/* </Branding> */}
      <VertFlexIP>
        <CopyThin>ИП Шевченко Валерий Сергеевич</CopyThin>
        <CopyThin>ИНН 632147018327</CopyThin>
        <CopyThin>ОГРНИП 324632700039473</CopyThin>
        <CopyThin>konspekt@yandex.ru</CopyThin>
        {/* <Copy style={{ fontSize: '11px'}}>+79162243606</Copy> */}
        {/* <Copy style={{ fontSize: '11px'}}>г. Тольятти</Copy> */}
      </VertFlexIP>

    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
padding: 0px 60px;
display: flex;
justify-content: space-between;
align-items: end;
margin-top: 80px;
gap: 5px;

@media (max-width: ${mediaQueries.phone}) {
  margin: var(--padding-mobile);
  margin-top: 80px;
  padding: 0px;
}
`;

const Copy = styled(FooterText)`
font-weight: 700;
width: auto;
`;

const CopyThin = styled(FooterText)`
font-family: 'Coolvetica Lite';
width: auto;
font-size: 12px;
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
