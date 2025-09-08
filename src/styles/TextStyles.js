import { motion } from 'framer-motion';
import { styled } from 'styled-components';
import { mediaQueries } from './GlobalStyles';

export const Heading = styled(motion.h1)`
  color: var(--text);
  width: var(--column-right-width);
  font-size: 4.5vw; //130px;
  font-size: auto;
  line-height: 105%; /* 136.5px */

  @media (max-width: ${mediaQueries.phone}) {
    font-size: 10vw;
  }
`;

export const SectionHeading = styled(motion.h2)`
  color: var(--text);
  font-size: 80px;
  line-height: 105%; /* 136.5px */
  margin: 120px 0 20px;
  margin-top: ${({ margin }) => margin};

  @media (max-width: ${mediaQueries.phone}) {
    font-size: 12vw;
    margin: 90px 0 20px;
  }
`;

export const MainFeature = styled.h3`
  color: var(--text);
  font-size: 64px;
  line-height: 95%; /* 136.5px */

  @media (max-width: ${mediaQueries.phone}) {
    font-size: 10vw;
  }
`;

export const Button = styled.button`
  color: var(--accent);
  font-size: 48px;
  line-height: 105%; /* 136.5px */

  @media (max-width: ${mediaQueries.phone}) {
    font-size: 3.33vw;
  }
`;

export const MainText = styled(motion.p)`
  color: var(--text);
  font-size: 36px;
  line-height: 95%;
  /* margin-bottom: 10px; */

  @media (max-width: ${mediaQueries.phone}) {
    font-size: 20px;
  }
`;

export const SmallerText = styled(motion.p)`
  color: var(--text);
  font-size: 32px;
  line-height: 105%;
  /* margin-bottom: 10px; */

  @media (max-width: ${mediaQueries.phone}) {
    font-size: 24px;
  }
`;



export const MenuAndFootnote = styled(motion.p)`
  color: var(--text);
  font-size: 24px;
  line-height: 105%; /* 136.5px */

  @media (max-width: ${mediaQueries.phone}) {
    font-size: 20px;
  }
`;

export const SmallThin = styled(motion.p)`
  color: var(--text);
  font-size: 24px;
  font-family: Coolvetica Lite;
  line-height: 100%; /* 136.5px */
  letter-spacing: 0px;

  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: ${mediaQueries.phone}) {
    font-size: 16px;
  }
`;



export const Features = styled(motion.p)`
  font-size: 20px;
  width: 100%;

  @media (max-width: ${mediaQueries.phone}) {
    font-size: 16px;
  }
`

export const ThinFeatures = styled(Features)`
  font-family: 'Coolvetica Lite';
`


export const FooterText = styled.p`
  color: var(--text);
  font-size: 16px;
  line-height: 105%; /* 136.5px */
`;

// components from portfolio
export const h1 = styled(motion.h1)`
  color: var(--color-text);
  font-size: 72px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 72px */
  margin: 0;

  @media (max-width: ${mediaQueries.phone}) {
    font-size: 36px;
  }
`;

export const h2 = styled(motion.h2)`
  color: var(--color-text);
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 48px */

  @media (max-width: ${mediaQueries.phone}) {
    font-size: 30px;
  }
`;

export const logoAndCardTitles = styled.h4`
  color: var(--color-text);
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 24px */
`;

export const cardTags = styled.p`
  color: var(--color-text);
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 13px */
`;

export const paragraph = styled.p`
  color: var(--color-text);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 145%; /* 23.2px */
`;


export const menuAndTags = styled.button`
  color: var(--color-text);
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 20px */
  border: none;
  background-color: transparent;
  text-align: left;
`;

export const sectionTitle = styled.h3`
  color: var(--color-text);
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 32px */
  margin: 0;
  /* margin-bottom: 20px; */

  @media (max-width: ${mediaQueries.phone}) {
    font-size: 24px;
  }
`;

