import React from 'react';
import styled from 'styled-components';
import { Box, ColoredText, Image, VideoPlayer } from '../components/index';
import { mediaQueries } from '../styles/GlobalStyles.js'
import { GridContainer } from '../styles/GlobalStyles';
import { SectionHeading, SmallerText } from '../styles/TextStyles';
import { Asterisk } from './ListSection';
import { Button, ButtonWrapper } from './Hero.js';

const BasicSection = ({ pageData, grids, id }) => {
  const { title, asterisk, type, buttonText } = pageData;
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
              {Boolean(box.mainText) && <ColoredText component={SmallerText} data={box} key={box.mainText} />}
              {Boolean(box.video) && <VideoPlayer videoSrc={box.video} />}
              {Boolean(box.image) && <Image height={box.imageHeight} width={box.imageWidth} src={box.image} />}
            </Box>
          ))}
        </GridContainer>
      )}
      {Boolean(asterisk) && <Asterisk>{asterisk}</Asterisk>}
      {Boolean(buttonText) && (
        <ButtonWrapper
          style={{ marginTop: '20px' }}
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
            delay: 0.35,
          }}
          viewport={{ once: true }}
        >
          <Button fontSize='40px' to='/'>{buttonText}</Button>

        </ButtonWrapper>
      )
      }
    </Wrapper >
  );
};

export default BasicSection;

const Wrapper = styled.section``;

