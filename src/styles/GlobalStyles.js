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
  gap: 20px;
`

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({type}) => type === 'review' ? '20px' : '10px' };
  width: ${({ type }) => type === 'review' ? 'calc(var(--left-column-width) - 60px)' : 'auto' };
  height: ${({ type }) => type === 'review' ? 'calc(var(--left-column-width) - 60px)' : 'auto' };

  &::last-child {
  width: ${({ type }) => type === 'review' ? 'var(--left-column-width)' : 'var(--right-column-width)'};
  }

  @media (max-width: ${mediaQueries.phone}) {
    height: ${({ type }) => type === 'review' ? 'calc(var(--left-column-width) / 1.25)' : '100%'};
    width: 100%;
    &::last-child {
      width: auto;
    }
  }
`;
