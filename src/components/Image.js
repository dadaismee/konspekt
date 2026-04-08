import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { mediaQueries } from '../styles/GlobalStyles';

const Image = ({ src, width, height }) => {
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
        delay: 0.15,
      }}
      viewport={{ once: true }}
      src={src}
      width={width}
      height={height}
      loading="lazy"
    >
    </Wrapper>
  )
}
export default Image;

export const Wrapper = styled(motion.img)`
  width: ${({ width }) => width || "var(--left-column-width)"};
  height: ${({ height }) => height || "var(--left-column-width)"};
  border-radius: 10px;
  border: 1px solid var(--text);
  box-shadow: 4px 6px 10px rgba(0, 0, 0, 0.125);
  object-fit: cover;

  @media (max-width: ${mediaQueries.phone}) {
    display: none;
  }
`;
