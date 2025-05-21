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
  AnnouncementBar
} from "../components/index";
import {
  about,
  audience,
  author,
  contact,
  faq,
  hero,
  outcomes,
  pricing,
  process,
  program,
  requestFormBuy,
  trial,
  aboutFreeCourse,
  results,
  reviews,
  links,
  gift_certificate
} from "../pageData/writing-pro.js";
import "../styles/layout.css";

const IndexPage = () => {
  const [isGift, setIsGift] = useState(false); 
  const [selectedTariff, setSelectedTariff] = useState('practice');

  const handleClick = (tariffName) => {
    setSelectedTariff(tariffName);
    console.log("poops", tariffName);
  }

  const toggleGift = () => {
    setIsGift(prev => !prev); // Toggle gift state
  };

  //console.log('selectedTariff', selectedTariff)
  //console.log('isGift', isGift)

  return (
    <>
      {/* <AnnouncementBar /> */}
      <FirstScreen>
        <Header data={links} />
        <Hero data={hero} type="landing" selectedTariff={selectedTariff} handleClick={handleClick} />
      </FirstScreen>
      <BasicSection id="about" pageData={about} grids={grids_3} /> 
      <BasicSection pageData={audience} grids={grids_4} />
      <ListSection pageData={outcomes} />
      {/* <BasicSection id="results" pageData={results} grids={grids_3} /> */}
      {/* <BasicSection id="process" pageData={process} grids={grids_4} /> */}
      <Program id="program" pageData={program} />
      <Pricing id="pricing" pageData={pricing}
        selectedTariff={selectedTariff} handleClick={handleClick} />
      {/* <BasicSection id="trial" pageData={trial} grids={grids_3} /> */}
      {/* <BasicSection id="gift-certificate" pageData={gift_certificate} grids={grids_3} /> */}
      <Reviews id="reviews"
        pageData={reviews} />
      <Author pageData={author} /> 
      <RequestForm id="form" grids={grids_3}
        pageData={requestFormBuy} 
        handleClick={handleClick} 
        toggleGift={toggleGift} 
        selectedTariff={selectedTariff || 'practice'} 
        isGift={isGift|| false} 
        type="landing" />
      <FAQ
        pageData={faq} />
      {/* <BasicSection id="about" pageData={aboutFreeCourse} grids={grids_3} /> */}
      <Contact id="contact" pageData={contact} />
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
height: 95dvh;
display: flex;
flex-direction: column;
justify-content: center;
`;
