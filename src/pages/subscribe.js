import React from "react";
import { RequestForm, Header, Footer, SEO } from '../components/index.js';
import styled from "styled-components";
import { grids_3 } from '../pages/index.js';
import { requestFormFree, links } from '../pageData/writing-pro.js';

const SubscribePage = () => {
  return (
    <Wrapper>
      <Header data={links} />
      <RequestForm id="form" grids={grids_3} pageData={requestFormFree} selectedTariff='subscriber' margin='80px' buttonText='Оплатить' />
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </Wrapper>
  )
}
export const Head = () => (
  <SEO
    title='Рассылка школы «Конспект»'
    description='Еженедельные дайджесты ресурсов для оптимизации написания текстов, чтения и поиска источников и другой академической работы'
    keywords=''
  />
);

export default SubscribePage;

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  height: 100%;

`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 93dvh;
`


