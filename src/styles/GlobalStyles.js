import { styled } from 'styled-components';

export const mediaQueries = {
  phone: '768px',
};

export const GridContainer = styled.div`
  display: grid;
  row-gap: 10px;
  column-gap: 20px;
  justify-content: space-between;
  grid-template-columns: repeat(5, 17.2vw);

  @media (max-width: ${mediaQueries.phone}) {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

export const Flex = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: ${mediaQueries.phone}) {
    flex-direction: column;
  }
`;

export const VertFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 20px;
`

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({type}) => type === 'review' ? '20px' : '10px' };
  width: ${({ type }) => type === 'review' ? 'calc(var(--left-column-width) - 60px)' : 'auto' };
  height: ${({ type }) => type === 'review' ? 'calc(var(--left-column-width) - 60px)' : 'auto' };

  &:first-child {
    width: 50%;
  }

  &:last-child {
  width: ${({ type }) => type === 'review' ? 'calc(var(--left-column-width) - 60px)' : '50%'};
  }

  @media (max-width: ${mediaQueries.phone}) {
    height: ${({ type }) => type === 'review' ? 'calc(var(--left-column-width) / 1.25)' : '100%'};
    width: 100%;
    &:first-child {
      width: 100%;
    }
    &:last-child {
      width: auto;
    }
  }
`;
