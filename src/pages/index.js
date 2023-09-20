import React from 'react';
import SEO from '../components/SEO';
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
      <div style={{ height: '100vh' }}>
        <Header />
        <Hero data={hero} />
      </div>
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
      <Contact pageData={contact} />
      <Footer />
    </>
  );
};

export default IndexPage;

export const Head = () => <SEO />;

const grids_4 = [
  '1 / 1 / 1 / 3',
  '2 / 1 / 2 / 3',
  '3 / 1 / 3 / 3',
  '1 / 3 / 4 / 6',
];

const grids_3 = ['1 / 1 / 1 / 3', '2 / 1 / 2 / 3', '1 / 3 / 3 / 6'];
