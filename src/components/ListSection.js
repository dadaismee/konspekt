import React from 'react';
import styled from 'styled-components';
import { Box, ColoredText } from '../components/index';
import { MenuAndFootnote, SectionHeading } from '../styles/TextStyles';

const PageSection = ({ pageData, id }) => {
  const { title, asterisk } = pageData;
  const data = pageData.boxes.map((box) => ({ ...box }));

  return (
    <Wrapper id={id}>
      <SectionHeading>{title}</SectionHeading>
      <Box type='list'>
        {data.map((box, index) => (
          <ListItem>
            <Circle>{index + 1}</Circle>
            <ColoredText data={box} key={box.mainText} />
          </ListItem>
        ))}
      </Box>
      {Boolean(asterisk) && <Asterisk>{asterisk}</Asterisk>}
    </Wrapper>
  );
};

export default PageSection;

const Wrapper = styled.section``;

export const Asterisk = styled(MenuAndFootnote)`
  margin-top: 16px;
  color: #3d4e3e;
`;

export const ListItem = styled.ol`
  display: flex;
  gap: 20px;
  align-items: center;
  align-self: flex-start;
`;

export const Circle = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 64px;
  min-width: 64px;
  height: 64px;
  border-radius: 100%;
  background-color: var(--accent);
  font-size: 40px;
`;
