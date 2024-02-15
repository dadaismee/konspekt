import React from 'react';
import styled from 'styled-components';
import { Box, ColoredText } from '../components/index';
import { GridContainer } from '../styles/GlobalStyles';
import { SectionHeading } from '../styles/TextStyles';
import { Asterisk } from './ListSection';

const BasicSection = ({ pageData, grids, id }) => {
  const { title, asterisk, type } = pageData;
  const data = pageData.boxes.map((box, index) => ({
    ...box,
    grid: grids[index],
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
      {Boolean(type === 'basic') && (
        <GridContainer>
          {data.map((box) => (
            <Box grid={box.grid} padding={box.padding} key={box.mainText}>
              {Boolean(box.mainText) && <ColoredText data={box} key={box.mainText} />}
              {Boolean(box.video) && <div style={{width: '100%', height: '100%'}}><IFrame src={box.video} frameborder="0" allow="autoplay; fullscreen; picture-in-picture"  title="Random Walk"/></div>}
            </Box>
          ))}
        </GridContainer>
      )}
      {Boolean(asterisk) && <Asterisk>{asterisk}</Asterisk>}
    </Wrapper>
  );
};

export default BasicSection;

const Wrapper = styled.section``;

const IFrame = styled.iframe`
  width: 100%;
  height: 100%;
  }
`
