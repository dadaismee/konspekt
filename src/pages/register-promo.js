import React, { useState, useEffect } from "react";
import { RequestForm, Header, Footer, Contact } from '../components/index.js';
import styled from "styled-components";
import { grids_3 } from '../pages/index.js';
import { requestFormBuyPromo, links } from '../pageData/writing-pro.js';
import { contact } from "../pageData/writing-pro.js";

const RegisterPage = () => {
  return (
    <Wrapper>
      <Header data={links} />
      <RequestForm id="form" grids={grids_3} pageData={requestFormBuyPromo} margin='80px' buttonText='Оплатить' />
      <Contact id="contact" pageData={contact} />
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </Wrapper>
  )
}

export default RegisterPage;

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


