import React, { useState, useEffect } from "react";
import { RequestForm, Header, Footer, SEO } from '../components/index.js';
import styled from "styled-components";
import { grids_3 } from '../pages/index.js';
import { requestFormBuy, links } from '../pageData/writing-pro.js';

const RegisterPage = () => {
    const [isGift, setIsGift] = useState(false); 
    const [tariffFromHash, setTariffFromHash] = useState()
    const [selectedTariff, setSelectedTariff] = useState('active' || selectedTariff || tariffFromHash);

    const handleClick = (tariffName) => {
        setSelectedTariff(tariffName);
      }

  const toggleGift = () => {
    setIsGift(prev => !prev); 
  };

  useEffect(() => {
    const extractHash = () => {
        const hashValue = window.location.hash.substr(1); // Remove the '#' character
        const hash = hashValue.split('/')[0]; // Get the part before the first '/'
        if (hash) {
          setTariffFromHash(hash)
          handleClick(hash); // Pass to parent handler
      }
    };
    extractHash(); // Run on component mount

    window.addEventListener("hashchange", extractHash); // Listen for hash changes
    return () => window.removeEventListener("hashchange", extractHash); // Cleanup listener
  }, []);

  console.log("poops", selectedTariff)

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
export const Head = () => (
  <SEO
    title='Регистрация на курс «Система письма»'
    description='Практический курс продвинутых техник и инструментов академического письма. Оптимизируете чтение и научитесь писать статьи быстрее и глубже — от чтения литературы до автоматической сборки черновика'
    keywords='академическое письмо, курс, курс академического письма, написать статью, шевченко, валерий шевченко, написать текст, zettelkasten, цеттелькастен, зеттелькастен, продуктивность, научная статья, Pandoc, Zotero, Obsidian, Markdown, нон-фикшн'
  />
);
