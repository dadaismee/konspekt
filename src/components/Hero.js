import { motion } from 'framer-motion';
import React from 'react';
import { styled } from 'styled-components';
import Typewriter from 'typewriter-effect';
import { mediaQueries } from '../styles/GlobalStyles';
import { Heading, MainText } from '../styles/TextStyles';

const Hero = ({ data }) => {
  const { title, typeWriterText, description, buttonText } = data;

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
        <Button
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
          to='#form'>
          {buttonText}
        </Button>
      </FlexContainer>
    </Wrapper>
  );
};

export default Hero;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 90%;

  @media (max-width: ${mediaQueries.phone}) {
    justify-content: start;
    height: auto;
  }
`;

const Tagline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: start;
  margin: 150px 0;

  @media (max-width: ${mediaQueries.phone}) {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 16vh 0 12vh;
  }
`;

const SiteHeading = styled(Heading)`
  padding: 0;
  margin: 0;
  line-height: 85%;

  // here
  /* height: 6.25vw; */
  // here

  span {
    color: var(--accent);
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  @media (max-width: ${mediaQueries.phone}) {
    flex-direction: column;
    align-items: start;
    gap: 2vh;
  }
`;

const Description = styled(MainText)`
  width: var(--left-column-width);

  @media (max-width: ${mediaQueries.phone}) {
    width: 100%;
  }
`;

export const Button = styled(motion.AnchorLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: var(--right-column-width);
  height: ${({ height }) => height || '115px'};
  font-size: 48px;
  font-family: Coolvetica;
  color: var(--accent);
  background-color: transparent;
  border-radius: 15px;
  border: 3px solid var(--accent);
  transition: var(--transition);

  &:hover {
    background-color: var(--accent);
    color: var(--text);
    box-shadow: 0px 0px 40px rgba(235, 235, 235, 0.5);
    cursor: pointer;
  }

  @media (max-width: ${mediaQueries.phone}) {
    width: 100%;
    font-size: 7vw;
  }
`;
