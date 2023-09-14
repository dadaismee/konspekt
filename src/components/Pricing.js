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
      <SectionHeading>{title}</SectionHeading>

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
