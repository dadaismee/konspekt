import React from 'react';
import styled from 'styled-components';
import { Box, ColoredText } from '../components/index';
import { Flex, mediaQueries } from '../styles/GlobalStyles';
import { Features, MenuAndFootnote, SectionHeading, SmallThin, SmallerText } from '../styles/TextStyles';

const PageSection = ({ pageData, id }) => {
  const { title, asterisk } = pageData;
  const data = pageData.boxes.map((box) => ({ ...box }));

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
      <div style={{   width: "var(--right-column-width)" }}>
      <Box type='list' fontSize='24px'>
        {data.map((box, index) => (
          <ListItem gridArea={box.gridArea}>
            <Circle>{index + 1}</Circle>
            <ColoredText component={SmallerText} data={box} key={box.mainText} />
          </ListItem>
        ))}
      </Box>
      </div>

      {Boolean(asterisk) && <Asterisk 
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
          delay: 0.4,
        }}
        viewport={{ once: true }}>
        {asterisk}</Asterisk>}
    </Wrapper>
  );
};

export default PageSection;

const Wrapper = styled.section`
`;

export const Asterisk = styled(Features)`
  margin-top: 10px;
  width: 100%;
  color: var(--text);
`;

export const ListItem = styled.ol`
  display: flex;
  gap: 20px;
  align-items: start;
  align-self: flex-start;
  width: 100%;

  @media (max-width: ${mediaQueries.phone}) {
    align-items: center;
    gap: 20px;
  }
`;

export const Circle = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 64px;
  max-width: 64px;
  height: 64px;
  border-radius: 100%;
  background-color: var(--accent);
  font-size: 40px;

  @media (max-width: ${mediaQueries.phone}) {
    display: none;
    min-width: 40px;
    max-width: 40px;
    height: 40px;
    font-size: 20px;
  }
`;

export const Grid = styled.div`
  display: grid; 
  grid-template-columns: repeat(2, 1fr);
  {/* grid-template-columns: calc(100% - var(--right-column-width)) calc(100% - var(--left-column-width)); */}
  column-gap: 20px;
  row-gap: 20px;

  @media (max-width: ${mediaQueries.phone}) {
    display: flex; 
    flex-direction: column;
    gap: 10px;
  }
`;
