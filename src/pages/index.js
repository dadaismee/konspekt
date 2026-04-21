import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  Author,
  BasicSection,
  Contact,
  FAQ,
  Footer,
  Header,
  Hero,
  HowWorks,
  ListSection,
  Pricing,
  Program,
  RequestForm,
  SEO,
  Reviews,
  AnnouncementBar,
  VideoReviews,
  About,
  TrackedScreen
} from "../components/index";
import {
  aboutCompany,
  audience,
  author,
  contact,
  faq,
  hero,
  outcomes,
  pricing,
  process,
  principles,
  program,
  requestFormBuy,
  problem,
  start,
  trial,
  aboutFreeCourse,
  results,
  reviews,
  links,
  videoReviews,
  gift_certificate,
  systemComponents
} from "../pageData/data.infrastructure-new.js";
import "../styles/layout.css";
import { getFrontmatter } from "../components/extractFrontmatter.js";
import courses from "../pageData/index.json";
import { METRIKA_ID, getCurrentScreen } from "../components/TrackedScreen";

const IndexPage = () => {
  const [isGift, setIsGift] = useState(false);
  const [selectedTariff, setSelectedTariff] = useState('practice');

  const handleClick = (tariffName) => {
    setSelectedTariff(tariffName);
  }

  const toggleGift = () => {
    setIsGift(prev => !prev); // Toggle gift state
  };

  //console.log('selectedTariff', selectedTariff)
  //console.log('isGift', isGift)

  const courseData = getFrontmatter(courses, "research-infrastructure");

  const handleMainButtonClick = () => {
    console.log('[Click] hero_main_click');
    if (typeof window.ym !== "undefined") {
      window.ym(METRIKA_ID, "reachGoal", "hero_main_click", { from_screen: getCurrentScreen() });
    }
  };

  const handleSmallButtonClick = () => {
    console.log('[Click] hero_small_click');
    if (typeof window.ym !== "undefined") {
      window.ym(METRIKA_ID, "reachGoal", "hero_small_click", { from_screen: getCurrentScreen() });
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
          <Hero data={hero} type="landing" selectedTariff={selectedTariff} handleClick={handleClick} onMainButtonClick={handleMainButtonClick} onSmallButtonClick={handleSmallButtonClick} />
        </FirstScreen>
      </TrackedScreen>

      <TrackedScreen id="problem">
        <BasicSection id="problem" pageData={problem} grids={grids_3} />
      </TrackedScreen>

      <TrackedScreen id="audience">
        <BasicSection pageData={audience} grids={grids_3} />
      </TrackedScreen>
	  { /* <TrackedScreen id="system-components">
        <BasicSection id="system-components" pageData={systemComponents} grids={grids_3} />
      </TrackedScreen> */}
      {/* <ListSection pageData={outcomes} /> */}
	  { /* <TrackedScreen id="process">
        <BasicSection id="process" pageData={process} grids={grids_3} />
      </TrackedScreen> */}

      <TrackedScreen id="results">
        <BasicSection id="results" pageData={results} grids={grids_4} />
      </TrackedScreen>

      <TrackedScreen id="pricing">
        <Pricing id="pricing" pageData={pricing} selectedTariff={selectedTariff} handleClick={handleClick} onBuyClick={handlePricingBuyClick} />
      </TrackedScreen>

      <TrackedScreen id="trial">
        <BasicSection id="trial" pageData={trial} grids={grids_3} />
      </TrackedScreen>

      <TrackedScreen id="reviews">
        <Reviews id="reviews" pageData={reviews} />
      </TrackedScreen>

      <TrackedScreen id="about">
        <BasicSection id="about" pageData={aboutCompany} grids={grids_3}/>
      </TrackedScreen>

      <TrackedScreen id="contact">
        <Contact id="contact" pageData={contact} />
      </TrackedScreen>
      <Footer /> </>);
};

export default IndexPage;

export const Head = () => <SEO />;

const grids_4 = [
  "1 / 1 / 1 / 3",
  "2 / 1 / 2 / 3",
  "3 / 1 / 3 / 3",
  "1 / 3 / 4 / 6",
];

export const grids_3 = ["1 / 1 / 1 / 3", "2 / 1 / 2 / 3", "1 / 3 / 3 / 6"];

const FirstScreen = styled.div`
height: 85dvh;
display: flex;
flex-direction: column;
justify-content: center;
`;
