import React from 'react';
import styled from 'styled-components';
import { Box } from '../components/index';
import { Features, MenuAndFootnote, SectionHeading, SmallerText } from '../styles/TextStyles';
import { Text } from './ColoredText';
import { Asterisk, Circle, ListItem } from './ListSection';
import { typograf } from './typograf';

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
      <div style={{   width: "var(--right-column-width)" }}>
      <Box type='list'>
        {data.map((box, index) => (
          <ListItem>
            <Circle>{index}</Circle>
            <Flex>
              <SmallerText key={box.mainText}>{box.mainText}</SmallerText>
              {Boolean(box.subText) && (
                <MenuAndFootnote style={{ fontFamily: "Coolvetica Lite", margin: '0' }}>
                  {typograf(box.subText)}
                </MenuAndFootnote>
              )}
            </Flex>
            {/* <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignSelf: 'center', maxWidth: '25%'}}>
              <MenuAndFootnote style={{ color: 'var(--accent)'}}>Артефакт: </MenuAndFootnote>
              <MenuAndFootnote>{box.artifact}</MenuAndFootnote>
            </div> */}
          </ListItem>
        ))}
      </Box>
      </div>
      {Boolean(asterisk) && <Asterisk>{asterisk}</Asterisk>}
    </Wrapper>
  );
};

export default Program;

const Wrapper = styled.section``;

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
`;
