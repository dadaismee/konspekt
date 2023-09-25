import React from 'react';
import styled from 'styled-components';
import { Box } from '../components/index';
import { Flex } from '../styles/GlobalStyles';
import { MainFeature, MainText, SectionHeading } from '../styles/TextStyles';
import { Button } from './Hero';
import { Asterisk } from './ListSection';

const Pricing = ({ pageData, grids, id }) => {
  const { title, asterisk } = pageData;
  const tariffs = pageData.tariffs.map((tariff) => tariff);

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
        {tariffs.map((tariff) => (
          <FlexContainer>
            <Box>
              <MainFeature
                style={{
                  color: 'var(--accent)',
                  textAlign: 'center',
                }}>
                {tariff.title}
              </MainFeature>
            </Box>
            <Box>
              {tariff.features.map((feature) => (
                <MainText>{feature}</MainText>
              ))}
            </Box>
            <Button to='#form'>{tariff.price}</Button>
          </FlexContainer>
        ))}
      </Flex>

      {Boolean(asterisk) && <Asterisk>{asterisk}</Asterisk>}
    </Wrapper>
  );
};

export default Pricing;

const Wrapper = styled.section``;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: var(--left-column-width);

  &:last-child {
    width: var(--right-column-width);
  }
`;
