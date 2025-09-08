import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { styled } from 'styled-components';
import { Cards, Tags } from '../components/index';
import { mediaQueries } from '../styles/GlobalStyles';
import { sectionTitle, MainText, SectionHeading } from '../styles/TextStyles';
import courses from "../pageData/index.json";

const Work = () => {
  const [activeTag, setActiveTag] = useState('Все');

  const selectTag = (e, tag) => {
    e.preventDefault();
    setActiveTag(tag);
  };

  return (
    <Wrapper
      id='courses'
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
        delay: 0.5,
      }}
      viewport={{ once: true }}>
      <SectionHeading>Курсы</SectionHeading>
      {/* <Tags activeTag={activeTag} handleClick={selectTag} /> */}
      <Cards data={courses} filter={activeTag} />
    </Wrapper>
  );
};

export default Work;

const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;

  @media (max-width: ${mediaQueries.phone}) {
    padding-top: 40px;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: ${mediaQueries.phone}) {
    margin: 0 0 0 20px;
  }
`;

const SectionTitle = styled(sectionTitle)`
  margin: 0;
`;
