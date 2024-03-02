import React from "react";
import styled from "styled-components";
import { MainFeature, MenuAndFootnote, MainText, SectionHeading } from "../styles/TextStyles";
import Box from "./Box";
import { GridContainer, FlexContainer, mediaQueries } from "../styles/GlobalStyles.js";
import ColoredText from "./ColoredText";
import { motion } from 'framer-motion';
import { Button } from './Hero.js'

const Reviews = ({ pageData, id }) => {
  const { title, reviewItems } = pageData;

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
        viewport={{ once: true }}
      >
        {title}
      </SectionHeading>
      <BoxesWrapper>
        {reviewItems.map((reviewItem, index) => {
          const { author, image, score, data, longText } = reviewItem;
          return (
            <Box type='review' fontSize='24px'> 
              <FlexContainer type='review' >
                <div style={{display: 'flex', alignItems: 'start', justifyContent: 'space-between', gap: '20px'}}>
                  <Container>
                    <Avatar src={image} />
                    <MainText style={{ color: 'var(--accent)'}} >{reviewItem.author}</MainText>
                  </Container>
                  <Score>{score}</Score>
                </div>
                <ColoredText type='review' height='auto' component='MenuAndFootnote' data={data} />
                {Boolean(longText) && <div style={{ display: 'flex', justifyContent: 'end' }}>
                ↓
                </div>}
              </FlexContainer>
            </Box>
          );
        })}
      </BoxesWrapper>
    </Wrapper>
  );
};

export default Reviews;

const Wrapper = styled.section`
  position: relative;

  @media (max-width: ${mediaQueries.phone}) {
    width: 100%;
  }
  `;

const Avatar = styled(motion.img)`
width: 100px;
height: 100px;
border-radius: 100%;
`;

const Score = styled(MainText)``;

const Container = styled.div`
display: flex;
gap: 20px;
align-items: center;
`

export const BoxesWrapper = styled(motion.div)`
  display: flex;
  gap: 1.38vw; 
  overflow-x: scroll;
  overflow-y: hidden;
  height: auto;
  width: 100%;
  margin: 10px -60px 0px -60px;
  padding: 0px 60px;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: ${mediaQueries.phone}) {
    padding: 0 20px;
    margin: 0px 20px 0px -20px;
    gap: 10px;
  }
`;

