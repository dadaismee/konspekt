import React, { useState } from "react";
import styled from "styled-components";
import {
  BasicSection,
  Contact,
  Footer,
  Header,
  Hero,
  RequestForm,
  SEO,
  Image
} from "../components/index";
import {
  about,
  audience,
  contact,
  hero,
  requestForm,
  links
} from "../pageData/free-database.js";
import "../styles/layout.css";

const KnowledgeBasePage = () => {
  const [selectedTariff, setSelectedTariff] = useState();

  const handleClick = (tariffName) => {
    setSelectedTariff(tariffName);
  }

  console.log(selectedTariff);

  return (
    <>
      {/* <FirstScreen> */}
      <Header data={links} />
      <Hero data={hero} selectedTariff={'lead'} handleClick={handleClick} />
      {/* </FirstScreen> */}
      <BasicSection id="about" pageData={about} grids={grids_3} />
      <BasicSection id="audience" pageData={audience} grids={grids_4} />
      <RequestForm id="form" grids={grids_3}
        pageData={/* Boolean(selectedTariff) ? requestFormBuy
          : requestFormFree */ requestForm} selectedTariff='magnet_lead' type="free" />
      <Contact id="contact" pageData={contact} />
      <Footer /> </>);
};

export default KnowledgeBasePage;

export const Head = () => (
  <SEO
    title='Библиотека цифровой продуктивности'
    description='Ресурсы для оптимизации написания текстов, чтения и поиска источников и другой академической работы'
    keywords=''
  />
);

const grids_4 = [
  "1 / 1 / 1 / 3",
  "2 / 1 / 2 / 3",
  "3 / 1 / 3 / 3",
  "1 / 3 / 4 / 6",
];

export const grids_3 = ["1 / 1 / 1 / 3", "2 / 1 / 2 / 3", "1 / 3 / 3 / 6"];

const FirstScreen = styled.div`
height: 100dvh;
`;
