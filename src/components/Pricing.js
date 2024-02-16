import React from "react";
import styled from "styled-components";
import { Box, ColoredText } from "../components/index";
import { Flex, mediaQueries } from "../styles/GlobalStyles";
import { MainFeature, MainText, SectionHeading } from "../styles/TextStyles";
import { Button, ButtonWrapper } from "./Hero";
import { Asterisk } from "./ListSection";

const Pricing = ({ pageData, id }) => {
  const { title, asterisk, boxes } = pageData;
  const tariffs = pageData.tariffs.map((tariff) => tariff);

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

      <Flex>
        {tariffs.map((tariff, index) => (
          <FlexContainer>
            <Box>
              <MainFeature
                style={{
                  marginBottom: "30px"

                }}
              >
                {tariff.title}
              </MainFeature>
 
              {tariff.features.map((feature) => (
               <ColoredText data={feature} key={feature.mainText} />
              ))}
            </Box>


            <ButtonWrapper
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
                delay: 0.3 + index * 0.1,
              }}
              viewport={{ once: true }}
            >
              <Button to="#form">{tariff.price}</Button>
            </ButtonWrapper>
          </FlexContainer>
        ))}
      </Flex>

      {Boolean(asterisk) && <Asterisk>{asterisk}</Asterisk>}
    </Wrapper>
  );
};

export default Pricing;

const Wrapper = styled.section``;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: var(--left-column-width);

  &:last-child {
    width: var(--right-column-width);
  }

  @media (max-width: ${mediaQueries.phone}) {
    width: auto;
    &:last-child {
      width: auto;
    }
  }
`;
