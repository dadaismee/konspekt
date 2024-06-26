import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import author from '../assets/author.png';
import { Box, ColoredText, Image } from '../components/index';
import { Flex, mediaQueries } from '../styles/GlobalStyles';
import { MainFeature, SectionHeading } from '../styles/TextStyles';
import { Asterisk } from './ListSection';

const Author = ({ pageData, id }) => {
  const { title, asterisk, boxes } = pageData;
  // const img = getImage(author);
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
      <Flex>
        <Image src={author} />
        < Box type='author' fontSize='40px'>
          {Boolean(boxes.mainText) && <MainFeature
            style={{
              color: 'var(--accent)',
              display: 'flex',
              alignSelf: 'start',
            }}>
            {boxes.mainText}
          </MainFeature>}
          <div style={{ display: 'grid', gap: '3px' }}>
            {boxes.steps.map((step) => (
              <ColoredText data={step} key={step.mainText} />
            ))}
          </div>
        </Box>
      </Flex>
      {Boolean(asterisk) && <Asterisk>{asterisk}</Asterisk>}
    </Wrapper >
  );
};

export default Author;

const Wrapper = styled.section``;
