import { motion } from 'framer-motion';
import React from 'react';
import { styled } from 'styled-components';
import { mediaQueries } from '../styles/GlobalStyles';
import { Text } from './ColoredText';

const types = {
  basic: {
    display: 'flex',
    flexDirection: 'column',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  author: {
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
  },
};

const Box = ({ children, grid, type, padding, fontSize, isOpen, height, width }) => {
  return (
    <Wrapper
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
      viewport={{ once: true }}
      style={{ maxHeight: isOpen ? 'auto' : 'auto' }}
      height={height}
      width={width}
      fontSize={fontSize}
      padding={padding}
      type={type}
      grid={grid}>
      {children}
    </Wrapper>
  );
};

export default Box;

const Wrapper = styled(motion.div)`
  border-radius: 15px;
  border: 3px solid #000;
  padding: ${({ padding }) => padding || '30px'};
  grid-area: ${({ grid }) => grid};
  ${({ type }) => types[`${type}`]}
  height: ${({ height }) => height || 'auto'};
  width: ${({ width }) => width || 'auto'};

  &:last-child {
    display: ${({ type }) => type !== 'review' ? 'flex' : 'block' };
    justify-content: center;
    align-items: center;

    ${Text} {
      font-size: ${({ fontSize }) => fontSize || '64px'};

      @media (max-width: ${mediaQueries.phone}) {
        font-size: 24px;
      }
    }
  }
`;
