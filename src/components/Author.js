import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import { Box, ColoredText, Image } from '../components/index';
import { Flex, VertFlex, mediaQueries } from '../styles/GlobalStyles';
import { SmallThin, MenuAndFootnote, SectionHeading, MainText, SmallerText } from '../styles/TextStyles';
import { Asterisk } from './ListSection';
import { FlexContainer } from './Hero';
import { FeatureArrow, FeatureItem, FeatureText } from './Pricing';
import { typograf } from './typograf';

const Author = ({ pageData, id }) => {
  const { title, asterisk, teamMembers } = pageData;
  return (
    <Wrapper id={id}>
      <SectionHeading
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
          delay: 0.1,
        }}
        viewport={{ once: true }}>
        {title}
      </SectionHeading>
      <Flex>

        {teamMembers.map((teamMember, index) => {
          const { name, occupation, image, regalia, reviewLink } = teamMember;
          return (
          <Box type='review' width='50%' fontSize='24px'>
            <Container>
              <Avatar src={image} />
              <VertFlex>
                <div style={{ display: "flex", flexDirection: "column", gap: "5px"}}>
                  <MainText>{name}</MainText>
                  <MenuAndFootnote style={{ fontSize: "20px", fontFamily: 'Coolvetica Lite' }}>{occupation}</MenuAndFootnote>
                </div>
                <br/>

                <div style={{ display: "flex", flexDirection: "column", gap: "15px"}}>
                {regalia.map((item, index) => (
                    <FeatureItem key={index}>
                      <FeatureArrow>→</FeatureArrow>
                      <ColoredText height='auto' component={MenuAndFootnote} style={{ fontFamily: "Coolvetica Lite" }} data={item} />
                    </FeatureItem>
                  ))}
                </div>

                </VertFlex>
            </Container>
          </Box>
          )})}
      </Flex>
      {Boolean(asterisk) && <Asterisk>{asterisk}</Asterisk>}
    </Wrapper >
  );
};

export default Author;

const Wrapper = styled.section`
  @media (max-width: ${mediaQueries.phone}) {
    display: none;
  }
`;


const Avatar = styled(motion.img)`
width: 200px;
height: 200px;
border-radius: 15px;
`

const Container = styled.div`
display: flex;
gap: 20px;
align-items: start;
`
