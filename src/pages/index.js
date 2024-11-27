import React, { useState } from "react";
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
  results,
  reviews,
  links
} from "../pageData/writing-pro.js";
import "../styles/layout.css";

const IndexPage = () => {
  const [selectedTariff, setSelectedTariff] = useState('active');

  const handleClick = (tariffName) => {
    setSelectedTariff(tariffName);
  }

  console.log('selectedTariff', selectedTariff)

  return (
    <>
      <AnnouncementBar />
      <FirstScreen>
        <Header data={links} />
        <Hero data={hero} type="landing" selectedTariff={selectedTariff} handleClick={handleClick} />
      </FirstScreen>
      <BasicSection id="about" pageData={about} grids={grids_3} />
      <BasicSection pageData={audience} grids={grids_4} />
      <ListSection pageData={outcomes} />
      <BasicSection id="results" pageData={results} grids={grids_3} />
      <BasicSection id="process" pageData={process} grids={grids_4} />
      <Pricing id="pricing" pageData={pricing}
        selectedTariff={selectedTariff} handleClick={handleClick} />
      <Program id="program" pageData={program} />
      <Reviews id="reviews"
        pageData={reviews} />
      <Author pageData={author} /> 
      <FAQ
        pageData={faq} />
      <RequestForm id="form" grids={grids_3}
        pageData={/* Boolean(selectedTariff) ? requestFormBuy
          : requestFormFree */ requestFormBuy} handleClick={handleClick} selectedTariff={selectedTariff || 'active'} type="landing" />
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
