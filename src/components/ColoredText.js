import React from 'react';
import { styled } from 'styled-components';
import { MainText } from '../styles/TextStyles';
import { mediaQueries } from '../styles/GlobalStyles';

const ColoredText = ({ data, component, height, type, lineHeight }) => {
  const { mainText, spanText } = data;
  const replacedText = mainText.replace(
    new RegExp(spanText.join('|'), 'g'),
    (match) => `<span>${match}</span>`
  );

  return <Text type={type} component={component} height={height} lineHeight={lineHeight} dangerouslySetInnerHTML={{ __html: replacedText }} />;
};

export default ColoredText;

export const Text = styled(({ component: Component = MainText, ...props }) => <Component {...props} />)`
  overflow: ${({ type }) => type === 'review' ? 'scroll' : 'none' }; 
  text-align: left;
  height: ${({height}) => height || 'auto'};
  line-height: ${({ lineHeight }) => lineHeight || '100%'};
  span {
    color: var(--accent);
  }

  @media (max-width: ${mediaQueries.phone}) {
    font-size: 24px;
  }
`;
