import { motion } from 'framer-motion';
import React from 'react';
import { styled } from 'styled-components';
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

const Box = ({ children, grid, type, fontSize }) => {
  return (
    <Wrapper fontSize={fontSize} type={type} grid={grid}>
      {children}
    </Wrapper>
  );
};

export default Box;

const Wrapper = styled(motion.div)`
  border-radius: 15px;
  border: 3px solid #000;
  padding: 30px;
  grid-area: ${({ grid }) => grid};
  ${({ type }) => types[`${type}`]}

  &:last-child {
    display: flex;
    justify-content: center;
    align-items: center;

    ${Text} {
      font-size: ${({ fontSize }) => fontSize || '64px'};
    }
  }
`;
