import React from "react";
import styled from "styled-components";
import { Box, ColoredText } from "../components/index";
import { Flex, mediaQueries, FlexContainer } from "../styles/GlobalStyles";
import { MainFeature, MainText, MenuAndFootnote, SectionHeading } from "../styles/TextStyles";
import { Button, ButtonWrapper } from "./Hero";
import { Asterisk } from "./ListSection";

const Pricing = ({ pageData, id, handleClick }) => {
  const { title, type, asterisk, boxes } = pageData;
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
            <Box height="100%">
              <MainFeature
                style={{
                  // color: 'var(--accent)',
                  marginBottom: "20px",
                }}
              >
                {tariff.title}
              </MainFeature>
 
              {tariff.features.map((feature) => (
                <FlexArrow>
                  <MenuAndFootnote>→</MenuAndFootnote>
                  <ColoredText component={MenuAndFootnote} lineHeight='100%' data={feature} key={feature.mainText} />
                </FlexArrow>
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
              onClick={() => handleClick(tariff.name)}
              width='100%'              >
                <Button to="#form" >
                  {tariff.price}
                </Button>
            </ButtonWrapper>
          </FlexContainer>
        ))}
      </Flex>

      {Boolean(asterisk) && <Asterisk
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
                delay: 0.4,
              }}
              viewport={{ once: true }}

      >{asterisk}</Asterisk>}
    </Wrapper>
  );
};

export default Pricing;

const Wrapper = styled.section`
`;

const FlexArrow = styled.div`
display: flex;
gap: 10px;
`
