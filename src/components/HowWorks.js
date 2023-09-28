import React from 'react';
import styled from 'styled-components';
import { Box, ColoredText } from '../components/index';
import { GridContainer, mediaQueries } from '../styles/GlobalStyles';
import { MainFeature, SectionHeading } from '../styles/TextStyles';
import { Asterisk } from './ListSection';

const HowWorks = ({ pageData, grids, id }) => {
  const { title, asterisk } = pageData;
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
      <GridContainer>
        {data.map((box) => (
          <Box grid={box.grid} key={box.mainText}>
            {Boolean(box.steps) ? (
              <FlexWrapper>
                <ColoredText data={box} key={box.mainText} />
                {box.steps.map((step) => (
                  <MainFeature>{step}</MainFeature>
                ))}
              </FlexWrapper>
            ) : (
              <ColoredText data={box} key={box.mainText} />
            )}
          </Box>
        ))}
      </GridContainer>

      {Boolean(asterisk) && <Asterisk>{asterisk}</Asterisk>}
    </Wrapper>
  );
};

export default HowWorks;

const Wrapper = styled.section``;

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: ${mediaQueries.phone}) {
    gap: 1vh;
  }
`;
