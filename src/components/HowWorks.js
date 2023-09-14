import React from 'react';
import styled from 'styled-components';
import { Box, ColoredText } from '../components/index';
import { GridContainer } from '../styles/GlobalStyles';
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
      <SectionHeading>{title}</SectionHeading>
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
`;
