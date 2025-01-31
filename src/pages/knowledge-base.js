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
} from "../components/index";
import {
  about,
  aboutCourse,
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

  return (
    <>
      {/* <FirstScreen> */}
      <Header data={links} />
      <Hero data={hero} selectedTariff={'lead'} type='free' handleClick={handleClick} />
      {/* </FirstScreen> */}
      <BasicSection id="about" pageData={about} grids={grids_3} />
      <RequestForm id="form" grids={grids_3}
        pageData={/* Boolean(selectedTariff) ? requestFormBuy
          : requestFormFree */ requestForm} selectedTariff='knowledge-base' type="free" />

      <BasicSection id="about" pageData={aboutCourse} grids={grids_3} />
      <Contact id="contact" pageData={contact} />
      <Footer /> </>);
};

export default KnowledgeBasePage;

export const Head = () => (
  <SEO
    title='Библиотека цифровой продуктивности'
    description='Ресурсы для оптимизации написания текстов, чтения и поиска источников и другой академической работы'
    keywords='продуктивность, библиотека, notion, obsidian, roam research, zotero, академическое письмо, курс по академическому письму, mendeley, latex, overleaf'
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
