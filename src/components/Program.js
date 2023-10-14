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
            <Flex>
              <Text key={box.mainText}>{box.mainText}</Text>
              {Boolean(box.subText) && (
                <Asterisk style={{ color: 'var(--asterisk)', margin: '0' }}>
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
  gap: 5px;
`;
