import React from 'react';
import styled from 'styled-components';
import { Box, ColoredText } from '../components/index';
import { mediaQueries } from '../styles/GlobalStyles';
import { MenuAndFootnote, SectionHeading } from '../styles/TextStyles';

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
      <Box type='list'>
        {data.map((box, index) => (
          <ListItem>
            <Circle>{index + 1}</Circle>
            <ColoredText data={box} key={box.mainText} />
          </ListItem>
        ))}
      </Box>
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

const Wrapper = styled.section``;

export const Asterisk = styled(MenuAndFootnote)`
  margin-top: 10px;
  width: 100%;
  color: var(--asterisk);
`;

export const ListItem = styled.ol`
  display: flex;
  gap: 20px;
  align-items: center;
  align-self: flex-start;

  @media (max-width: ${mediaQueries.phone}) {
    align-items: center;
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
    min-width: 40px;
    max-width: 40px;
    height: 40px;
    font-size: 20px;
  }
`;
