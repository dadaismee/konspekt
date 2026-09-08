import React, { useState } from "react";
import styled from "styled-components";
import {
  BasicSection,
  Contact,
  FAQ,
  Footer,
  Header,
  Hero,
  Pricing,
  Reviews,
  RequestForm,
  SEO,
} from "../components/index";
import {
  about,
  audience,
  aboutCompany,
  contact,
  faq,
  hero,
  outcomes,
  pricing,
  process,
  requestFormBuy,
  problem,
  trial,
  reviews,
  links,
} from "../pageData/data.agents.js";
import "../styles/layout.css";

const AgentsPage = () => {
  const [selectedTariff, setSelectedTariff] = useState('agent');

  const handleClick = (tariffName) => {
    setSelectedTariff(tariffName);
  };

  return (
    <>
      <FirstScreen>
        <Header data={links} />
        <Hero data={hero} type="landing" selectedTariff={selectedTariff} handleClick={handleClick} />
      </FirstScreen>

      <BasicSection id="problem" pageData={problem} grids={grids_3} />

      <BasicSection pageData={audience} grids={grids_3} />

      <BasicSection pageData={about} grids={grids_3} />

      <BasicSection pageData={outcomes} grids={grids_4} />

      <BasicSection id="process" pageData={process} grids={grids_3} />

      <Pricing id="pricing" pageData={pricing}
        selectedTariff={selectedTariff} handleClick={handleClick} />

      <BasicSection id="trial" pageData={trial} grids={grids_3} />

      <Reviews id="reviews" pageData={reviews} />

      <FAQ pageData={faq} />

      <BasicSection id="about" pageData={aboutCompany} grids={grids_3} />

      <RequestForm id="form" grids={grids_3}
        pageData={requestFormBuy}
        handleClick={handleClick}
        toggleGift={() => {}}
        selectedTariff={selectedTariff || 'agent'}
        isGift={false}
        type="landing" />

      <Contact id="contact" pageData={contact} />
      <Footer />
    </>
  );
};

export default AgentsPage;

export const Head = () => (
  <SEO
    title="ИИ-агент под исследовательскую задачу | Конспект"
    description="Кастомный ИИ-агент, который знает ваши источники: цитаты со страницами, библиография по ГОСТ, план от дедлайна. Проектная работа от 70 000 ₽."
  />);

const grids_3 = ["1 / 1 / 1 / 3", "2 / 1 / 2 / 3", "1 / 3 / 3 / 6"];

const grids_4 = [
  "1 / 1 / 1 / 3",
  "2 / 1 / 2 / 3",
  "3 / 1 / 3 / 3",
  "1 / 3 / 4 / 6",
];

const FirstScreen = styled.div`
  height: 95dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;