import { AnchorLink } from 'gatsby-plugin-anchor-links';
import React from 'react';
import { styled } from 'styled-components';
import Typewriter from 'typewriter-effect';
import { Heading, MainText } from '../styles/TextStyles';

const Hero = ({ data }) => {
  const { title, typeWriterText, description, buttonText } = data;

  return (
    <Wrapper>
      <Tagline>
        <SiteHeading>{title}</SiteHeading>
        <SiteHeading>
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
        <Description>{description}</Description>
        <Button style={{ width: 'var(--right-column-width' }} to='#form'>
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
`;

const Tagline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: end;
  margin: 150px 0;
`;

const SiteHeading = styled(Heading)`
  padding: 0;
  margin: 0;
  height: 86px;

  span {
    color: var(--accent);
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

const Description = styled(MainText)`
  width: var(--left-column-width);
`;

export const Button = styled(AnchorLink)`
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
`;
