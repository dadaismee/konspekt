import React, { useState } from "react";
import styled from "styled-components";
import {
  BasicSection,
  ListSection,
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
  audience,
  requestForm,
  outcomes,
  links,
  problems
} from "../pageData/free-course-data.js";
import "../styles/layout.css";

const FreeCoursePage = () => {
  const [selectedTariff, setSelectedTariff] = useState();

  const handleClick = (tariffName) => {
    setSelectedTariff(tariffName);
  }

  return (
    <>
      {/* <FirstScreen> */}
      <Header data={links} />
      <Hero data={hero} selectedTariff={'lead'} handleClick={handleClick} />
      {/* </FirstScreen> */}
      <BasicSection id="problems" pageData={problems} grids={grids_3} />
      <ListSection id="outcomes" pageData={outcomes} />
      <BasicSection id="audience" pageData={audience} grids={grids_4} />
      <RequestForm id="form" grids={grids_3}
        pageData={/* Boolean(selectedTariff) ? requestFormBuy
          : requestFormFree */ requestForm} selectedTariff='free-course' type="free" />

      <BasicSection id="about" pageData={aboutCourse} grids={grids_3} />
      <Contact id="contact" pageData={contact} />
      <Footer /> </>);
};

export default FreeCoursePage;

export const Head = () => (
  <SEO
    title='Как вести академические заметки — бесплатный курс'
    description='Бесплатный курс, где вы за 1 час научитесь находить и превращать идеи из источников в заметки и настроите картотеку идей'
    keywords='продуктивность, библиотека, notion, obsidian, roam research, zotero, академическое письмо, курс по академическому письму, mendeley, latex, overleaf, цеттелькастен, зеттелькастен, zettelkasten'
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
