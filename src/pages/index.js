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
  Work as Courses,
  Pricing,
  SEO,
  Reviews,
  About,
  AnnouncementBar,
  MainHero,
} from "../components/index";
import "../styles/layout.css";
import { links, hero, author, contact, about, courses, reviews } from "../pageData/data.home.js"

const IndexPage = () => {
  const [isGift, setIsGift] = useState(false); 
  const [selectedTariff, setSelectedTariff] = useState('practice');

  const handleClick = (tariffName) => {
    setSelectedTariff(tariffName);
  }

  const toggleGift = () => {
    setIsGift(prev => !prev); // Toggle gift state
  };


  return (
    <>
      <AnnouncementBar />
      <FirstScreen>
        <Header data={links} />
        <Hero data={hero} type="landing" selectedTariff={selectedTariff} handleClick={handleClick} />
      </FirstScreen>
      <Courses id="courses"/>
      <About data={about} id="about"/>
      <Author pageData={author} /> 
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

export const grids_3 = [
  "1 / 1 / 1 / 3", 
  "2 / 1 / 2 / 3", 
  "1 / 3 / 3 / 6"
];

const FirstScreen = styled.div`
height: 95dvh;
display: flex;
flex-direction: column;
justify-content: center;
`;
