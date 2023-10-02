import { AnimatePresence, motion } from 'framer-motion';
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
      <SectionHeading
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: 20,
        }}
        transition={{
          ease: [0.165, 0.84, 0.44, 1],
          duration: 1,
          delay: 0.1,
        }}
        viewport={{ once: true }}>
        {title}
      </SectionHeading>

      <VertFlex>
        {questions.map((faqItem, index) => {
          const { question, answer } = faqItem;
          return (
            <Box key={index} isOpen={isOpen[index]}>
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
                {/* {isOpen[index] && (
                  <Answer initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    {answer}
                  </Answer>
                )} */}
                <AnimatePresence>
                  {isOpen[index] && (
                    <Answer
                      key='answer'
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{
                        ease: [0.165, 0.84, 0.44, 1],
                        duration: 0.5,
                      }}>
                      {answer}
                    </Answer>
                  )}
                </AnimatePresence>
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
  cursor: pointer;
`;

const Question = styled(MainText)`
  cursor: pointer;
  width: 100%;
  text-align: left;
`;

const Answer = styled(MenuAndFootnote)``;

const VertFlex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

export const HorFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 20px;
`;
