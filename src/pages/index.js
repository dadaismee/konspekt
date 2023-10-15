import React from 'react';
import styled from 'styled-components';
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
} from '../components/index';
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
} from '../pageData/writing-pro.js';
import '../styles/layout.css';

const IndexPage = () => {
  return (
    <>
      <FirstScreen>
        <Header />
        <Hero data={hero} />
      </FirstScreen>
      <BasicSection id='about' pageData={about} grids={grids_4} />
      <BasicSection pageData={audience} grids={grids_4} />
      <ListSection pageData={outcomes} />
      <BasicSection id='results' pageData={results} grids={grids_3} />
      <HowWorks id='process' pageData={process} grids={grids_4} />
      <Program id='program' pageData={program} />
      <Pricing id='pricing' pageData={pricing} />
      <Author pageData={author} />
      <FAQ pageData={faq} />
      <RequestForm id='form' grids={grids_3} pageData={requestForm} />
      <Contact id='contact' pageData={contact} />
      <Footer />
    </>
  );
};

export default IndexPage;

export const Head = () => (
  <>
    <SEO />
    <meta property='og:image' content='https://postimg.cc/7C05ZKg5/19dd5d47' />
    <meta name='twitter:card' content='summary_large_image' />
    <meta property='twitter:domain' content='konspekt.io' />
    <meta property='twitter:url' content='https://konspekt.io/' />
    <meta
      name='twitter:title'
      content='Конспект — онлайн-курс академического письма'
    />
    <meta
      name='twitter:description'
      content='Здесь вы научитесь оптимизировать процесс создания научных статей — от чтения литературы до автоматической сборки готовой к публикации статьи'
    />
    <meta name='twitter:image' content='https://postimg.cc/7C05ZKg5/19dd5d47' />
  </>
);

const grids_4 = [
  '1 / 1 / 1 / 3',
  '2 / 1 / 2 / 3',
  '3 / 1 / 3 / 3',
  '1 / 3 / 4 / 6',
];

const grids_3 = ['1 / 1 / 1 / 3', '2 / 1 / 2 / 3', '1 / 3 / 3 / 6'];

const FirstScreen = styled.div`
  height: 100dvh;
`;
