import { motion } from 'framer-motion';
import React from 'react';
import { styled } from 'styled-components';
import { VertFlex, mediaQueries } from '../styles/GlobalStyles';
import { Text } from './ColoredText';
import { Features, ThinFeatures } from '../styles/TextStyles';
import VideoPlayer from './VideoPlayer';

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
  review: {
    fontSize: '24px',
  }
};

const Box = ({ children, grid, type, padding, fontSize, isOpen, height, width, bgColor, border, videoData }) => {
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
      bgColor={bgColor}
      width={width}
      fontSize={fontSize}
      padding={padding}
      border={border}
      type={type}
      grid={grid}>
      {children}
        {videoData && videoData.length > 0 && (
        <VideoFlexContainer>
          {videoData.map((review, index) => (
            <VideoWrapper key={index}>
              <VideoPlayer videoSrc={review.video} borderRadius="1000px" />
              <VideoVertFlex>
                <Features>{review.author}</Features>
                <ThinFeatures>{review.occupation}</ThinFeatures>
              </VideoVertFlex>
            </VideoWrapper>
          ))}
        </VideoFlexContainer>
      )}
    </Wrapper>
    
  );
};

export default Box;

const Wrapper = styled(motion.div)`
  border-radius: 15px;
  //border: ${({ border }) => border || "3px solid #000"};
  padding: ${({ padding }) => padding || '30px'};
  grid-area: ${({ grid }) => grid};
  ${({ type }) => types[`${type}`]}
  height: ${({ height }) => height || 'auto'};
  width: ${({ width }) => width || 'auto'};
  background-color: ${({ bgColor }) => bgColor || "var(--podlozhka)"};
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 10px;

  @media (max-width: ${mediaQueries.phone}) {
  padding: 20px;
  gap: 10px;
  }
  &:last-child {
    display: ${({ type }) => type !== 'review' ? 'flex' : 'block'};
    justify-content: space-evenly;
    align-items: start;

    ${Text} {
      font-size:  ${({ fontSize }) => fontSize || '56px'};

      @media (max-width: ${mediaQueries.phone}) {
        font-size: 24px;
      }
    }
  }
`;

const VideoFlexContainer = styled.div`
  display: flex;
  justify-content: start;
  gap: 20px;
  padding-top: 20px;
  border-radius: 20px;

  @media (max-width: ${mediaQueries.phone}) {
    flex-direction: column;
  }

`

const VideoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  height: 150px;
  width: 100%;
`

const VideoVertFlex = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`

