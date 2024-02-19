import React from "react";
import styled from "styled-components";
import { MainFeature, MenuAndFootnote, MainText,SectionHeading } from "../styles/TextStyles";
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
          const { author, image, score, data } = reviewItem;
          return (
              <Box type='review' height='466px' fontSize='24px'> 
              <FlexContainer type="review">
                <div style={{display: 'flex', alignItems: 'start', justifyContent: 'space-between' }}>
                <Container>
                  <Avatar src={image} />
                  <MainText>{reviewItem.author}</MainText>
                </Container>
                <Score>{score}</Score>
              </div>
              <ColoredText component='MenuAndFootnote' data={data} />
              <div style={{ display: 'flex', justifyContent: 'end'}}>
              <Button width='206px' fontSize='24px' height='56px'>Читать целиком</Button>
              </div>
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

export const BoxesWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 1.38vw; 
  overflow-x: scroll;
  overflow-y: none;
  padding: 10px -60px 20px -60px;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: ${mediaQueries.phone}) {
    padding: 10px 20px 10px 20px;
    gap: 20px;
  }
`;

