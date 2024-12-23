import React from "react";
import styled from "styled-components";
import { Box, ColoredText } from "../components/index";
import { Flex, mediaQueries, FlexContainer, VertFlex } from "../styles/GlobalStyles";
import { MainFeature, MainText, MenuAndFootnote, SectionHeading } from "../styles/TextStyles";
import { Button, ButtonWrapper } from "./Hero";
import { Asterisk } from "./ListSection";

const Pricing = ({ pageData, id, handleClick }) => {
  const { title, type, asterisk, boxes } = pageData;
  let tariffs = pageData.tariffs.map((tariff) => tariff);
  tariffs = tariffs.slice(0,2);

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
        {tariffs.length > 1 ?
          tariffs.map((tariff, index) => (
            <FlexContainer> 
              <Box height="100%">
                <MainFeature
                  style={{
                    // color: 'var(--accent)',
                    marginBottom: "30px",
                  }}
                >
                  {tariff.title}
                </MainFeature>
                <BoxGrid>
                  {tariff.features.map((feature) => (
                    <FlexArrow>
                      <MenuAndFootnote>→</MenuAndFootnote>
                      <VertFlex style={{ gap: '0px' }}>
                        <MenuAndFootnote>{feature.mainText}</MenuAndFootnote>
                        <MenuAndFootnote style={{ fontFamily: 'Coolvetica Lite', lineHeight: "100%", color: 'var(--asterisk); marginTop: "10px"' }}>{feature.spanText}</MenuAndFootnote>
                      </VertFlex>
                      {/* <ColoredText component={MenuAndFootnote} lineHeight='100%' data={feature} key={feature.mainText} /> */}
                    </FlexArrow>
                  ))}
                </BoxGrid>
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
                >
                <Button to="#form" >
                  {tariff.price}
                </Button>
              </ButtonWrapper>
            </FlexContainer> 
          ))
          :
          tariffs.map((tariff, index) => (
            <Flex>
              <Box>
                <BoxGrid>
                  {tariff.features.map((feature) => (
                    <FlexArrow>
                      <MenuAndFootnote>→</MenuAndFootnote>
                      <VertFlex style={{ gap: '0px' }}>
                        <MenuAndFootnote>{feature.mainText}</MenuAndFootnote>
                        <MenuAndFootnote style={{ fontFamily: 'Coolvetica Lite', lineHeight: "90%", color: 'var(--asterisk)' }}>{feature.spanText}</MenuAndFootnote>
                      </VertFlex>
                      {/* <ColoredText component={MenuAndFootnote} lineHeight='100%' data={feature} key={feature.mainText} /> */}
                    </FlexArrow>
                  ))}
                </BoxGrid>
              </Box>

              <ButtonWrapper
                style={{ width: "100%" }}
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
                width='100%'>
                <Button height="100%" to="#form" >
                  {tariff.price}
                </Button>
              </ButtonWrapper>
            </Flex>
          ))
        }
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
const BoxGrid = styled.div`
  display: grid;
  grid-template-columns: ${({ type }) => type === '1tariff' ? 'repeat(2, 1fr)' : 'none'};
  width: ${({ width }) => width || 'auto'};
  gap: 30px;

  @media (max-width: ${mediaQueries.phone}) {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;
}
`
