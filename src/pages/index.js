import React from 'react';
import {
  Author,
  BasicSection,
  Contact,
  Header,
  Hero,
  HowWorks,
  ListSection,
  Pricing,
  Program,
  RequestForm,
} from '../components/index';
import {
  about,
  audience,
  author,
  contact,
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
      <Header />
      <Hero data={hero} />
      <BasicSection id='about' pageData={about} grids={grids_4} />
      <BasicSection pageData={audience} grids={grids_4} />
      <ListSection pageData={outcomes} />
      <BasicSection id='results' pageData={results} grids={grids_3} />
      <HowWorks id='process' pageData={process} grids={grids_4} />
      <Program id='program' pageData={program} />
      <Pricing id='pricing' pageData={pricing} />
      <Author pageData={author} />
      {/* <FAQ /> */}
      <RequestForm id='form' grids={grids_3} pageData={requestForm} />
      <Contact pageData={contact} />
      {/* <Footer />  */}
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;

const grids_4 = [
  '1 / 1 / 1 / 3',
  '2 / 1 / 2 / 3',
  '3 / 1 / 3 / 3',
  '1 / 3 / 4 / 6',
];

const grids_3 = ['1 / 1 / 1 / 3', '2 / 1 / 2 / 3', '1 / 3 / 3 / 6'];
