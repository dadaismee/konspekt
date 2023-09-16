import { motion } from 'framer-motion';
import React, { useState } from 'react';
import styled from 'styled-components';
import {
  MainText,
  MenuAndFootnote,
  SectionHeading,
} from '../styles/TextStyles';
import Box from './Box';

const variants = {
  open: { rotate: 0 },
  closed: { rotate: -45 },
};

const FAQ = ({ pageData, id }) => {
  const { title, questions } = pageData;
  const [isOpen, setIsOpen] = useState(Array(questions.length).fill(false));

  const toggleOpen = (index) => {
    const newIsOpen = [...isOpen];
    newIsOpen[index] = !newIsOpen[index];
    setIsOpen(newIsOpen);
  };

  return (
    <Wrapper id={id}>
      <SectionHeading>{title}</SectionHeading>

      <VertFlex>
        {questions.map((faqItem, index) => {
          const { question, answer } = faqItem;
          return (
            <Box key={index}>
              <VertFlex>
                <HorFlex>
                  <Toggle
                    animate={isOpen[index] ? 'open' : 'closed'}
                    variants={variants}
                    onClick={() => toggleOpen(index)}>
                    ×
                  </Toggle>
                  <Question onClick={() => toggleOpen(index)}>
                    {question}
                  </Question>
                </HorFlex>
                {isOpen[index] && (
                  <Answer initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    {answer}
                  </Answer>
                )}
              </VertFlex>
            </Box>
          );
        })}
      </VertFlex>
    </Wrapper>
  );
};

export default FAQ;

const Wrapper = styled.section``;

const Toggle = styled(motion.div)`
  font-size: 60px;
  display: flex;
  justify-self: start;
  /* margin-right: 1rem; */
  cursor: pointer;
`;

const Question = styled(MainText)`
  cursor: pointer;
  width: 100%;
  text-align: center;
`;

const Answer = styled(MenuAndFootnote)``;

const Close = styled.div`
  font-size: 1.5rem;
  margin-left: auto;
  cursor: pointer;
`;

const VertFlex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

const HorFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
