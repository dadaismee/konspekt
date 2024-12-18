import React, { useState, useEffect } from "react";
import { RequestForm, Header, Footer } from '../components/index.js';
import styled from "styled-components";
import { grids_3 } from '../pages/index.js';
import { requestFormBuy, links } from '../pageData/writing-pro.js';

const RegisterPage = () => {
    const [selectedTariff, setSelectedTariff] = useState('active');
    const [isGift, setIsGift] = useState(false); 

    const handleClick = (tariffName) => {
        setSelectedTariff(tariffName);
      }

  const toggleGift = () => {
    setIsGift(prev => !prev); 
  };

  return (
    <Wrapper>
      <Header data={links} />
      <RequestForm 
        id="form" 
        grids={grids_3} 
        pageData={requestFormBuy} 
        selectedTariff={selectedTariff} 
        isGift={isGift || false} 
        toggleGift={toggleGift} 
        handleClick={handleClick} 
        type="landing" 
        margin='80px' 
        buttonText='Оплатить' />
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


