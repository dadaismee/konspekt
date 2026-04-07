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
  About
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
  principles,
  program,
  requestFormBuy,
  problem,
  trial,
  aboutFreeCourse,
  results,
  reviews,
  links,
  videoReviews,
  gift_certificate
} from "../pageData/data.infrastructure-new.js";
import "../styles/layout.css";
import { getFrontmatter } from "../components/extractFrontmatter.js";
import courses from "../pageData/index.json"

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

  return (
    <>
      <FirstScreen>
        <Header data={links} />
        <Hero data={hero} type="landing" selectedTariff={selectedTariff} handleClick={handleClick} />
      </FirstScreen>
      {/* <About data={courseData} id="about"/> */}
      <BasicSection id="problem" pageData={problem} grids={grids_4} />
      <BasicSection pageData={audience} grids={grids_3} />
	  {/* <BasicSection id="results" pageData={results} grids={grids_4} /> /*}
      {/* <ListSection pageData={outcomes} /> */}
      <Program id="program" pageData={program} />
      <Program id="principles" pageData={principles} />
      <BasicSection id="process" pageData={process} grids={grids_4} />
      <Pricing id="pricing" pageData={pricing}
        selectedTariff={selectedTariff} handleClick={handleClick} />
      <Reviews id="reviews" pageData={reviews} />
      {/* <BasicSection id="trial" pageData={trial} grids={grids_3} /> */}
      {/* <Author pageData={author} /> */}
      <RequestForm id="form" grids={grids_3}
        pageData={requestFormBuy}
        handleClick={handleClick}
        toggleGift={toggleGift}
        selectedTariff={selectedTariff || 'practice'}
        isGift={isGift || false}
        type="landing" />
      {/* <BasicSection id="gift-certificate" pageData={gift_certificate} grids={grids_3} /> */}
      {/* <FAQ pageData={faq} /> */}
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
