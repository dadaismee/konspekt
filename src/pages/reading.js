import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  Author,
  BasicSection,
  Contact,
  FAQ,
  Footer,
  Header,
  About,
  Hero,
  HowWorks,
  ListSection,
  Pricing,
  Program,
  RequestFormReading,
  SEO,
  Reviews,
  AnnouncementBar,
  VideoReviews
} from "../components/index";
import {
  contact,
  about,
  audience,
  faq,
  hero,
  outcomes,
  pricing,
  process,
  program,
  requestFormBuy,
  principles,
  results,
  problem,
  links,
} from "../pageData/data.reading.js";
import { author } from "../pageData/data.infrastructure.js";
import "../styles/layout.css";
import { getFrontmatter } from "../components/extractFrontmatter.js";
import courses from "../pageData/index.json"

const IndexPage = () => {
  const [isGift, setIsGift] = useState(false); 
  const [selectedTariff, setSelectedTariff] = useState('reading-practice');

  const handleClick = (tariffName) => {
    setSelectedTariff(tariffName);
  }

  const toggleGift = () => {
    setIsGift(prev => !prev); // Toggle gift state
  };

  //console.log('selectedTariff', selectedTariff)
  //console.log('isGift', isGift)

  return (
    <>
      <FirstScreen>
        <Header data={links} />
        <Hero data={getFrontmatter(courses, "reading")} type="reading" selectedTariff={selectedTariff} handleClick={handleClick} />
      </FirstScreen>
      <BasicSection id="about" pageData={problem} grids={grids_3} /> 
      <BasicSection pageData={audience} grids={grids_3} />
      {/* <BasicSection id="results" pageData={results} grids={grids_3} /> */}
      {/* <Program id="program" pageData={program} /> */}
      <Program id="process" pageData={process} />
      {/* <Program id="principles" pageData={principles} /> */}
      {/* <Reviews id="reviews" pageData={reviews} /> */}
      <Pricing id="pricing" pageData={pricing}
        selectedTariff={selectedTariff} handleClick={handleClick} />
      {/* <BasicSection id="trial" pageData={trial} grids={grids_3} /> */}
      <Author pageData={author} /> 
      <RequestFormReading id="form" grids={grids_3}
        pageData={requestFormBuy} 
        handleClick={handleClick} 
        toggleGift={toggleGift} 
        selectedTariff={selectedTariff || 'reading-practice'} 
        isGift={isGift|| false} 
        type="landing" />
      {/* <BasicSection id="gift-certificate" pageData={gift_certificate} grids={grids_3} /> */}
      <FAQ
        pageData={faq} />
      {/* <BasicSection id="about" pageData={aboutFreeCourse} grids={grids_3} /> */}
      <Contact id="contact" pageData={contact} />
      <Footer /> </>);
};

export default IndexPage;

export const Head = () => (
  <SEO 
    title="Лаборатория чтения | Конспект"
    description="Онлайн-лаборатория, где за 2 недели и 4 занятия вы научитесь извлекать суть из сложных текстов и формулировать собственные идеи"
  />);

const grids_4 = [
  "1 / 1 / 1 / 3",
  "2 / 1 / 2 / 3",
  "3 / 1 / 3 / 3",
  "1 / 3 / 4 / 6",
];

export const grids_3 = ["1 / 1 / 1 / 3", "2 / 1 / 2 / 3", "1 / 3 / 3 / 6"];

const FirstScreen = styled.div`
height: 95dvh;
display: flex;
flex-direction: column;
justify-content: center;
`;
