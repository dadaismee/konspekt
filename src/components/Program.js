import React from 'react';
import styled from 'styled-components';
import { Box } from '../components/index';
import { Features, MenuAndFootnote, SectionHeading, SmallerText } from '../styles/TextStyles';
import { Text } from './ColoredText';
import { Asterisk, Circle, Grid, ListItem } from './ListSection';
import { typograf } from './typograf.js';
import { Button } from './Hero.js';
import { mail } from './mail.js';

const Program = ({ pageData, id }) => {
  const { title, asterisk, button } = pageData;
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
      {/* <div style={{   width: "var(--right-column-width)" }}> */}
      {/* <Box type='list'> */}
      <Grid>
        {data.map((box, index) => (
          <Box>
          <ListItem>
            <Circle>{index + 1}</Circle>
            <Flex>
              <SmallerText key={box.mainText}>{box.mainText}</SmallerText>
              {Boolean(box.subText) && (
                <MenuAndFootnote style={{ fontFamily: "Coolvetica Lite", marginBottom: '0px' }}>
                  {typograf(box.subText)}
                </MenuAndFootnote>
              )}

              <div style={{ marginBottom: "0px"}}>
               {box.results && box.results.map((result, index) => (
                  <Features style={{ fontFamily: "Coolvetica Lite", marginBottom: "15px" }} key={index}>{result}</Features>
               ))}
              </div>
              {Boolean(button) && <Button fontSize='24px' to={mail}>Обсудить проект</Button>}

            </Flex>
            {/* <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignSelf: 'center', maxWidth: '25%'}}>
              <MenuAndFootnote style={{ color: 'var(--accent)'}}>Артефакт: </MenuAndFootnote>
              <MenuAndFootnote>{box.artifact}</MenuAndFootnote>
            </div> */}
          </ListItem>
          </Box>
        ))}
      {/* </Box> */}
      {/* </div> */}
      </Grid>
      {Boolean(asterisk) && <Asterisk>{asterisk}</Asterisk>}
    </Wrapper>
  );
};

export default Program;

const Wrapper = styled.section``;

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--flex-gap);
  width: 100%;
`;
