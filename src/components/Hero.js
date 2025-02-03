import { motion } from 'framer-motion';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import React from 'react';
import { styled } from 'styled-components';
import Typewriter from 'typewriter-effect';
import { Image, Box } from './index.js';
import { VertFlex, mediaQueries } from '../styles/GlobalStyles';
import { Heading, MainText, Features } from '../styles/TextStyles';
import { Asterisk } from './ListSection.js';

const Hero = ({ data, type, toggleGift }) => {
  const { title, typeWriterText, description, buttonText, features, video, image, asterisk } = data;

  return (
    <Wrapper>
      <FlexContainer>
        {Boolean(video) && <Video
          muted
          autoPlay
          playsinline
          loop
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
            delay: 0.15,
          }}
          viewport={{ once: true }}
          src={video} />}
        {Boolean(image) && <Image src={image} />}
        <VertFlex>
          <Box height="100%">
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

              </SiteHeading>
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
                <span style={{ fontFamily: "Coolvetica" }}>
                </span>
              </Description>
              {Boolean(features) && <FeaturesContainer>
                {features.map(feature => (
                  <Features key={feature}>{feature}</Features>
                ))}
              </FeaturesContainer>}

            </Tagline>
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
              delay: 0.35,
            }}
            viewport={{ once: true }}
          >
            {/* <MobileFeaturesContainer>
            {features.map(feature => (
              <MobileFeatureBorder>
              <Features key={feature}>{feature}</Features> 
              </MobileFeatureBorder>
            ))}
          </MobileFeaturesContainer> */}
            <ButtonsWrapper
              style={{ width: "100%" }}
              //onClick={() => handleClick("passive")}
            >
              <Button fontSize="40px" to={type === 'free' ? '#form' : '#pricing'}>{buttonText}</Button>
              {/* {Boolean(type !== 'free') && <Button 
              fontSize="24px" 
              width="calc(var(--right-column-width) - var(--left-column-width))" 
              onClick={() => toggleGift(true)}
              to='#gift-certificate'>Купить<br/>в подарок
            </Button>} */}

            </ButtonsWrapper>
          </ButtonWrapper>
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
            delay: 0.65,
          }}
          viewport={{ once: true }}
            style={{ marginTop: '-10px', fontFamily: 'Coolvetica Lite'}}>{asterisk}</Asterisk>}
        </VertFlex>
      </FlexContainer>
    </Wrapper>
  );
};

export default Hero;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 80dvh;

  @media (max-width: ${mediaQueries.phone}) {
    align-items: stretch;
    height: auto;
  }
`;

const Tagline = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: ${mediaQueries.phone}) {
    display: flex;
    flex-direction: column;
    gap: 40px;
    justify-content: start;
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
  align-items: strat;
  justify-content: start;
  width: 100%;

  @media (max-width: ${mediaQueries.phone}) {
    flex-direction: column;
    align-items: space-between;
  }
`;

const Description = styled(MainText)`
  font-family: Coolvetica Lite;
  line-height: 90%;
  @media (max-width: ${mediaQueries.phone}) {
    width: 100%;
  }
`;

export const Button = styled(AnchorLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => width || '100%'} ;
  height: ${({ height }) => height || '80px'};
  font-size: ${({ fontSize }) => fontSize || '40px'};
  background-color: ${({ type }) => type === "ghost" ? "transparent" : "var(--accent)"};
  box-sizing: border-box;
  color: ${({ type }) => type === "ghost" ? "var(--accent)" : "var(--text)"} ;
  ${({ type }) => type === "ghost" ?
    "border: 3px solid var(--accent)" : "border: 3px solid transparent"}; 
  font-family: Coolvetica;
  border-radius: 15px;
  line-height: 100%;
  transition: var(--transition);

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ type }) => type === "ghost" ? "none" : "0px 0px 50px rgba(235, 235, 235, 0.5)"};
    background-color: ${({ type }) => type === "ghost" ? "var(--accent)" : "none"};
    color: var(--text);
    border: border: 3px solid transparent;
    cursor: pointer;
  }

  @media (max-width: ${mediaQueries.phone}) {
    width: 100%;
    height: 80px;
    font-size: 24px;
    line-height: 80%;
    //background-color: ${({ type }) => type === "ghost" ? "var(--accent)" : "none"};
    //color: var(--text) ;
  }
`;

export const ButtonWrapper = styled(motion.button)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  align-items: center;
  width: ${({ width }) => width || '100%'};
  background-color: transparent;
  border: none;

  @media (max-width: ${mediaQueries.phone}) {
    width: 100%;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
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

const Video = styled(motion.video)`
  width: var(--left-column-width);
  max-height: var(--left-column-width);
  border-radius: 15px;
  box-shadow: 10px 20px 20px rgba(0, 0, 0, 0.125);

  @media (max-width: ${mediaQueries.phone}) {
    display: none;
  }
`;

