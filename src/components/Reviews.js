import React from "react";
import styled from "styled-components";
import { MainFeature, MainText, SectionHeading } from "../styles/TextStyles";
import Box from "./Box";
import { GridContainer, FlexContainer } from "../styles/GlobalStyles.js";
import ColoredText from "./ColoredText";
import { motion } from 'framer-motion';

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
      <FlexContainer type="review">
        {reviewItems.map((reviewItem, index) => {
          const { author, image, score, data } = reviewItem;
          return (
            <Box type='review' fontSize='24px'> 
              <div style={{display: 'flex', alignItems: 'start', justifyContent: 'space-between' }}>
                <Container>
                  <Avatar src={image} />
                  <MainText>{reviewItem.author}</MainText>
                </Container>
                <Score>{score}</Score>
              </div>
              <ColoredText data={data} />>
            </Box>
          );
        })}
      </FlexContainer>
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
