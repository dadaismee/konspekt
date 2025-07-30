import React from 'react';
import styled from 'styled-components';
import { Box, ColoredText, Image, VideoPlayer } from '../components/index';
import { FlexContainer } from './Hero';
import { VertFlex,} from '../styles/GlobalStyles';
import { MainText, MenuAndFootnote, SmallThin } from '../styles/TextStyles';

const VideoReviews = ({ pageData, id }) => {

  return (
    <Wrapper>
        {pageData.map((review, index) => (
          <VideoWrapper>
            <VideoPlayer key={index} videoSrc={review.video} borderRadius="1000px" />
            <MenuAndFootnote>{review.author}</MenuAndFootnote>
          </VideoWrapper>
        ))}
    </Wrapper>
  );
};

export default VideoReviews;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 54.34vw;
  justify-self: end;
  background-color: var(--podlozhka);
  margin-top: -30px;
  padding-bottom: 20px;
  border-radius: 20px;
`
const VideoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 200px;
  height: 250px;
`
