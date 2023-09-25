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
  margin: 180px 0 30px;

  @media (max-width: ${mediaQueries.phone}) {
    font-size: 12vw;
    margin: 16.6vh 0 30px;
  }
`;

export const MainFeature = styled.h3`
  color: var(--text);
  font-size: 64px;
  line-height: 95%; /* 136.5px */

  @media (max-width: ${mediaQueries.phone}) {
    font-size: 4.44vw;
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
  line-height: 110%;
  margin: 0px;

  @media (max-width: ${mediaQueries.phone}) {
    font-size: 6vw;
  }
`;

export const MenuAndFootnote = styled(motion.p)`
  color: var(--text);
  font-size: 24px;
  line-height: 105%; /* 136.5px */

  @media (max-width: ${mediaQueries.phone}) {
    font-size: 1.66vw;
  }
`;

export const FooterText = styled.p`
  color: var(--text);
  font-size: 16px;
  line-height: 105%; /* 136.5px */
`;
