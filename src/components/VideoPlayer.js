import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { mediaQueries } from '../styles/GlobalStyles.js';
import play from '../assets/play.png';

function VideoPlayer({ videoSrc, borderRadius }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleClick = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <Wrapper>
      <Video ref={videoRef} src={videoSrc} borderRadius={borderRadius} type="video/mp4" onClick={handleClick} />
      {!isPlaying && (
        <PlayIcon
          src={play}
          alt="Play Button"
          onClick={handleClick}
        />
      )}
    </Wrapper>
  );
}

export default VideoPlayer;

const Wrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%:
`

const Video = styled.video`
  width: 100%;
  height: 100%;
  border: 0px var(--podlozhka) solid;
  border-radius: ${({ borderRadius  }) => borderRadius || "12px"}; 
  object-fit: cover;
  cursor: pointer; /* Make it clickable */

  @media (max-width: ${mediaQueries.phone}) {
    object-fit: fit;
  }
`
const PlayIcon = styled.img`
  max-width: 80px;
  max-height: 80px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* Center the icon */
  opacity: 0.5; /* Adjust transparency for better visibility */
  cursor: pointer; /* Make it clickable */
`
