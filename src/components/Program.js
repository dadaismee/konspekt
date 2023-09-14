import React from 'react';
import styled from 'styled-components';
import { Box } from '../components/index';
import { SectionHeading } from '../styles/TextStyles';
import { Text } from './ColoredText';
import { Asterisk, Circle, ListItem } from './ListSection';

const Program = ({ pageData, id }) => {
  const { title, asterisk } = pageData;
  const data = pageData.boxes.map((box) => ({ ...box }));

  return (
    <Wrapper id={id}>
      <SectionHeading>{title}</SectionHeading>
      <Box type='list'>
        {data.map((box, index) => (
          <ListItem>
            <Circle>{index + 1}</Circle>
            <Flex>
              <Text style={{ fontSize: '64px' }} key={box.mainText}>
                {box.mainText}
              </Text>
              {Boolean(box.subText) && (
                <Asterisk style={{ color: '#3D4E3E', margin: '5px 0' }}>
                  {box.subText}
                </Asterisk>
              )}
            </Flex>
          </ListItem>
        ))}
      </Box>
      {Boolean(asterisk) && <Asterisk>{asterisk}</Asterisk>}
    </Wrapper>
  );
};

export default Program;

const Wrapper = styled.section``;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
`;
