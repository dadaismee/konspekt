import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Box, ColoredText, Image, VideoPlayer } from '../components/index';
import { mediaQueries } from '../styles/GlobalStyles.js'
import { GridContainer } from '../styles/GlobalStyles';
import { SectionHeading, SmallerText } from '../styles/TextStyles';
import { Asterisk } from './ListSection';
import { Button, ButtonWrapper } from './Hero.js';

const BasicSection = ({ pageData, grids, id }) => {
  const { title, subtitle, asterisk, type, videoData, buttonText } = pageData;
  const data = pageData.boxes.map((box, index) => ({
    ...box,
    grid: grids ? grids[index] : undefined,
  }));

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
      {Boolean(subtitle) && (
        <Subtitle
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            ease: [0.165, 0.84, 0.44, 1],
            duration: 1,
            delay: 0.2,
          }}
          viewport={{ once: true }}>
          {subtitle}
        </Subtitle>
      )}
      {Boolean(type === 'basic') && (
        <GridContainer>
          {data.map((box, index) => (
            <Box grid={box.grid} padding={box.padding} videoData={index !== 2 ? undefined : videoData } key={box.mainText || index}>
              {Boolean(box.mainText) && <ColoredText data={box} key={box.mainText} />}
              {Boolean(box.video) && <VideoPlayer videoSrc={box.video} />}
              {Boolean(box.image) && <Image height={box.imageHeight} width={box.imageWidth} src={box.image} />}
            </Box>
          ))}
        </GridContainer>
      )}
	  {Boolean(buttonText) && <div style={{ marginTop: "10px"}}><Button to="https://konspekt.zenclass.ru/public/t/79b6d42c-18dd-46c5-b708-bb5cf68b8505">{buttonText}</Button></div>}
      {Boolean(asterisk) && <Asterisk>{asterisk}</Asterisk>}
    </Wrapper >
  );
};

export default BasicSection;

const Wrapper = styled.section`
  padding: 0px 60px;

  @media (max-width: ${mediaQueries.phone}) {
    padding: 0px;
  }
`;

const Subtitle = styled(motion.div)`
  font-family: Coolvetica Lite;
  font-size: 24px;
  line-height: 100%;
  margin-bottom: 40px;
  color: var(--text);

  @media (max-width: ${mediaQueries.phone}) {
    font-size: 20px;
  }
`;

