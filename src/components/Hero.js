import { motion } from 'framer-motion';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import React from 'react';
import { styled } from 'styled-components';
import Typewriter from 'typewriter-effect';
import { mediaQueries } from '../styles/GlobalStyles';
import { Heading, MainText, Features } from '../styles/TextStyles';

const Hero = ({ data, handleClick }) => {
  const { title, typeWriterText, description, buttonText, features } = data;

  return (
    <Wrapper>
      <Tagline>
        <SiteHeading
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
            delay: 0.25,
          }}
          viewport={{ once: true }}>
          {title}

          <Typewriter
            options={{
              strings: typeWriterText,
              autoStart: true,
              loop: true,
            }}
          />
        </SiteHeading>
      </Tagline>
      <FlexContainer>
        <Description
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
            delay: 0.25,
          }}
          viewport={{ once: true }}>
          {description}
        </Description>
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
            delay: 0.35,
          }}
          viewport={{ once: true }}
          width='var(--right-column-width)'>
          <FeaturesContainer>
            {features.map(feature => (
              <Features key={feature}>{feature}</Features> 
            ))}
          </FeaturesContainer>
          <MobileFeaturesContainer>
            {features.map(feature => (
              <MobileFeatureBorder>
              <Features key={feature}>{feature}</Features> 
              </MobileFeatureBorder>
            ))}
          </MobileFeaturesContainer>
          <ButtonsWrapper
            onClick={() => handleClick("promo")}
          >
          <Button fontSize="40px" width="var(--right-column-width)" to='#pricing'>{buttonText}</Button>
            {/* <Button 
              type="ghost" 
              fontSize="24px" 
              width="calc(var(--right-column-width) - var(--left-column-width))" 
              to='#form'>Получить 1 урок
            </Button> */}
          </ButtonsWrapper>
        </ButtonWrapper>
      </FlexContainer>
    </Wrapper>
  );
};

export default Hero;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 80%;

  @media (max-width: ${mediaQueries.phone}) {
    justify-content: space-between;
    align-items: stretch;
  }
`;

const Tagline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: start;
  margin: 120px 0;

  @media (max-width: ${mediaQueries.phone}) {
    display: flex;
    flex-direction: column;
    gap: 10px;
    /* margin: 40px 0px; */
  }
`;

const SiteHeading = styled(Heading)`
  padding: 0;
  margin: 0;
  line-height: 85%;

  span {
    color: var(--accent);
  }
  
`;

export const FlexContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: end;
  justify-content: space-between;
  width: 100%;

  @media (max-width: ${mediaQueries.phone}) {
    flex-direction: column;
    align-items: space-between;
  }
`;

const Description = styled(MainText)`
  width: calc(var(--left-column-width) - 30px);

  @media (max-width: ${mediaQueries.phone}) {
    width: 100%;
  }
`;

export const Button = styled(AnchorLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => width || '100%'} ;
  height: ${({ height }) => height || '115px'};
  font-size: ${({ fontSize }) => fontSize  || '48px'};
  background-color: ${({ type }) => type === "ghost" ? "transparent" : "var(--accent)"};
  box-sizing: border-box;
color: ${({ type }) => type === "ghost" ? "var(--accent)" : "var(--text)"};
  ${({ type }) => type === "ghost" ? 
    "border: 3px solid var(--accent)" : "border: none"}; 
  font-family: Coolvetica;
  border-radius: 15px;
  transition: var(--transition);

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ type }) => type === "ghost" ? "none" : "0px 0px 50px rgba(235, 235, 235, 0.5)"};
    background-color: ${({ type }) => type === "ghost" ? "var(--accent)" : "none"};
    color: var(--text);
    border: none;
    cursor: pointer;
  }

  @media (max-width: ${mediaQueries.phone}) {
    width: 100%;
    font-size: 32px;
  }
`;

export const ButtonWrapper = styled(motion.button)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  align-items: center;
  width: ${({ width }) => width || '100%' };
  background-color: transparent;
  border: none;

  @media (max-width: ${mediaQueries.phone}) {
    width: 100%;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 20px;
`


const FeaturesContainer = styled.div`
display: flex; 
justify-content: space-between; 
width: 100%;

  @media (max-width: ${mediaQueries.phone}) {
  display: none;
}
`

const MobileFeaturesContainer = styled.div`
  display: none;

  @media (max-width: ${mediaQueries.phone}) {
    display: grid;
    grid-template-rows: repeat(2, auto);
    grid-template-columns: repeat(2, auto);
    gap: 5px;
    width: 100%;
  }
`

const MobileFeatureBorder = styled.div`
  border: 3px solid var(--accent);
  padding: 10px;
  border-radius: 15px;
`
