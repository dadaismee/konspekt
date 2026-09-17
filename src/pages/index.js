import React, { useState } from "react";
import styled from "styled-components";
import {
  BasicSection,
  Contact,
  FAQ,
  Footer,
  Header,
  Hero,
  ListSection,
  Pricing,
  Reviews,
  SEO,
	Author,
  TrackedScreen
} from "../components/index";
import {
  about,
  aboutCompany,
  audience,
	author,
  caseTimeline,
  contact,
  faq,
  hero,
  outcomes,
  pricing,
  problem,
  process,
  reviews,
  trial,
  links,
  saasSection,
  writingSystemSection,
} from "../pageData/data.agents.js";
import "../styles/layout.css";
import { METRIKA_ID, getCurrentScreen } from "../components/TrackedScreen";

const IndexPage = () => {
  const [selectedTariff, setSelectedTariff] = useState('agent');

  const handleClick = (tariffName) => {
    setSelectedTariff(tariffName);
  }

  const handleMainButtonClick = () => {
    console.log('[Click] hero_main_click');
    if (typeof window.ym !== "undefined") {
      window.ym(METRIKA_ID, "reachGoal", "hero_main_click", { from_screen: getCurrentScreen() });
    }
  };

  const handlePricingBuyClick = (planName) => {
    console.log('[Click] pricing_buy_click', { plan_id: planName });
    if (typeof window.ym !== "undefined") {
      window.ym(METRIKA_ID, "reachGoal", "pricing_buy_click", { plan_id: planName, from_screen: getCurrentScreen() });
    }
  };

  const handleHeaderButtonClick = () => {
    console.log('[Click] header_start_click');
    if (typeof window.ym !== "undefined") {
      window.ym(METRIKA_ID, "reachGoal", "header_start_click", { from_screen: getCurrentScreen() });
    }
  };

  return (
    <>
      <Header data={links} onButtonClick={handleHeaderButtonClick} />
      <TrackedScreen id="hero">
        <FirstScreen>
          <Hero data={hero} type="landing" handleClick={handleClick} onMainButtonClick={handleMainButtonClick} />
        </FirstScreen>
      </TrackedScreen>

      <TrackedScreen id="problem">
        <BasicSection id="problem" pageData={problem} grids={grids_4} />
      </TrackedScreen>

      <TrackedScreen id="audience">
        <BasicSection pageData={audience} grids={grids_3} />
      </TrackedScreen>

      <TrackedScreen id="process">
        <ListSection id="process" pageData={process} />
      </TrackedScreen>

      <TrackedScreen id="pricing">
        <Pricing id="pricing" pageData={pricing} selectedTariff={selectedTariff} handleClick={handleClick} onBuyClick={handlePricingBuyClick} />
      </TrackedScreen>

      <TrackedScreen id="reviews">
        <Reviews id="reviews" pageData={reviews} />
      </TrackedScreen>

		{/* <TrackedScreen id="saas">
        <BasicSection id="saas" pageData={saasSection} grids={grids_3} />
      </TrackedScreen>

      <TrackedScreen id="writing-system">
        <BasicSection id="writing-system" pageData={writingSystemSection} grids={grids_3} />
      </TrackedScreen> */}

      <FAQ id="faq" pageData={faq} />

      <TrackedScreen id="about-company">
        <Author pageData={author} grids={grids_3} />
      </TrackedScreen>

      <TrackedScreen id="contact">
        <Contact id="contact" pageData={contact} />
      </TrackedScreen>
      <Footer />
    </>
  );
};

export default IndexPage;

export const Head = () => (
  <SEO
    title="Конспект — кастомные инструменты для работы со знанием"
    description="Кастомные ИИ-агенты и интерфейсы под ваш материал: цитаты со страницами, библиография по ГОСТ, карты связей, планы от дедлайна. Начните с бесплатного аудита."
  />);

const grids_3 = ["1 / 1 / 1 / 3", "2 / 1 / 2 / 3", "1 / 3 / 3 / 6"];

const grids_4 = [
  "1 / 1 / 1 / 3",
  "2 / 1 / 2 / 3",
  "3 / 1 / 3 / 3",
  "1 / 3 / 4 / 6",
];

const FirstScreen = styled.div`
height: 85dvh;
display: flex;
flex-direction: column;
justify-content: center;
`;
