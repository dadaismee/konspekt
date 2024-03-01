import { motion } from 'framer-motion';
import { styled } from 'styled-components';
import { mediaQueries } from './GlobalStyles';

export const Heading = styled(motion.h1)`
  color: var(--text);
  font-size: 9vw; //130px;
  line-height: 105%; /* 136.5px */

  @media (max-width: ${mediaQueries.phone}) {
    font-size: 12vw;
    text-align: left;
  }
`;

export const SectionHeading = styled(motion.h2)`
  color: var(--text);
  font-size: 96px;
  line-height: 105%; /* 136.5px */
  margin: 180px 0 20px;
  margin-top: ${({ margin }) => margin };

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
  font-size: 40px;
  line-height: 100%;
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
    font-size: 16px;
  }
`;

export const Features = styled(motion.p)`
  color: var(--accent);
  font-family: 'Coolvetica';
  font-size: 20px;

  @media (max-width: ${mediaQueries.phone}) {
    font-size: 16px;
  }
`

export const FooterText = styled.p`
  color: var(--text);
  font-size: 16px;
  line-height: 105%; /* 136.5px */
`;
