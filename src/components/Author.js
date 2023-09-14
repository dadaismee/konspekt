import React from 'react';
import styled from 'styled-components';
import author from '../assets/author.png';
import { Box, ColoredText } from '../components/index';
import { Flex } from '../styles/GlobalStyles';
import { MainFeature, SectionHeading } from '../styles/TextStyles';
import { Asterisk } from './ListSection';

const Author = ({ pageData, id }) => {
  const { title, asterisk, boxes } = pageData;
  // const img = getImage(author);
  return (
    <Wrapper id={id}>
      <SectionHeading>{title}</SectionHeading>
      <Flex>
        <Image src={author}></Image>
        <Box type='author' fontSize='40px'>
          <MainFeature
            style={{
              color: 'var(--accent)',
              display: 'flex',
              alignSelf: 'start',
            }}>
            {boxes.mainText}
          </MainFeature>
          <div style={{ display: 'grid', gap: '3px' }}>
            {boxes.steps.map((step) => (
              <ColoredText data={step} key={step.mainText} />
            ))}
          </div>
        </Box>
      </Flex>
      {Boolean(asterisk) && <Asterisk>{asterisk}</Asterisk>}
    </Wrapper>
  );
};

export default Author;

const Wrapper = styled.section``;

const Image = styled.img`
  width: 515px;
  height: 515px;
  border-radius: 15px;
`;
