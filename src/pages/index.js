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
  VideoReviews
} from "../components/index";
import {
  problem,
  about,
  audience,
  principles,
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
  videoReviews,
  gift_certificate
} from "../pageData/writing-pro.js";
import "../styles/layout.css";

const IndexPage = () => {
  const [isGift, setIsGift] = useState(false); 
  const [selectedTariff, setSelectedTariff] = useState('main');

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
      {/* <AnnouncementBar /> */}
      <FirstScreen>
        <Header data={links} />
        <Hero data={hero} type="landing" selectedTariff={selectedTariff} handleClick={handleClick} />
      </FirstScreen>
      <BasicSection id="problem" pageData={problem} grids={grids_3} /> 
      <BasicSection id="about" pageData={about} grids={grids_3} /> 
      <BasicSection pageData={audience} grids={grids_3} />
      {/* <VideoReviews pageData={videoReviews} /> */}
      {/* <BasicSection id="results" pageData={results} grids={grids_3} /> */}
      {/* <ListSection pageData={outcomes} /> */}
      <Program id="program" pageData={program} />
      <BasicSection id="process" pageData={process} grids={grids_3} />
      <Pricing id="pricing" pageData={pricing}
        selectedTariff={selectedTariff} handleClick={handleClick} />
      {/* <BasicSection id="trial" pageData={trial} grids={grids_3} /> */}
      <Program pageData={principles} />
      <Reviews id="reviews" pageData={reviews} />
      <Author pageData={author} /> 
      <RequestForm id="form" grids={grids_3}
        pageData={requestFormBuy} 
        handleClick={handleClick} 
        toggleGift={toggleGift} 
        selectedTariff={selectedTariff || 'main'} 
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
