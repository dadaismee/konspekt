import { styled } from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  row-gap: 10px;
  column-gap: 20px;
  grid-template-columns: repeat(5, 17.2vw);
`;

export const Flex = styled.div`
  display: flex;
  gap: 20px;
`;

export const mediaQueries = {
  phone: '768px',
};
