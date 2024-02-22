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
  requestForm,
  results,
  reviews,
} from "../pageData/writing-pro.js";
import "../styles/layout.css";

const IndexPage = () => {
  const [selectedTariff, setSelectedTariff] = useState('');

  const handleClick = (tariffName) => {
    setSelectedTariff(tariffName);
  }

  return (
    <>
      <FirstScreen>
        <Header />
        <Hero data={hero} />
      </FirstScreen>
      <BasicSection id="about" pageData={about} grids={grids_3} />
      <BasicSection pageData={audience} grids={grids_4} />
      <ListSection pageData={outcomes} />
      <BasicSection id="results" pageData={results} grids={grids_3} />
      <HowWorks id="process" pageData={process} grids={grids_3} />
      <Program id="program" pageData={program} />
      <Pricing id="pricing" pageData={pricing} selectedTariff={selectedTariff} handleClick={handleClick} />
      <Author pageData={author} />
      <Reviews id="reviews" pageData={reviews} />
      <FAQ pageData={faq} />
      <RequestForm id="form" grids={grids_3} pageData={requestForm} selectedTariff={selectedTariff} />
      <Contact id="contact" pageData={contact} />
      <Footer />
    </>
  );
};

export default IndexPage;

export const Head = () => <SEO />;

const grids_4 = [
  "1 / 1 / 1 / 3",
  "2 / 1 / 2 / 3",
  "3 / 1 / 3 / 3",
  "1 / 3 / 4 / 6",
];

const grids_3 = ["1 / 1 / 1 / 3", "2 / 1 / 2 / 3", "1 / 3 / 3 / 6"];

const FirstScreen = styled.div`
  height: 100dvh;
`;
