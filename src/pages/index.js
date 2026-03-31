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
  Cards
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
  problem,
  trial,
  aboutFreeCourse,
  results,
  reviews,
  links,
  videoReviews,
  gift_certificate
} from "../pageData/data.home.js";
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
        <Hero data={hero} />
      </FirstScreen>
      <About data={about} />
      <Cards id="courses" data={courses} />
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
