import React from 'react';
import { styled } from 'styled-components';
import { MainText } from '../styles/TextStyles';

const ColoredText = ({ data, component, height, type }) => {
  const { mainText, spanText } = data;
  const replacedText = mainText.replace(
    new RegExp(spanText.join('|'), 'g'),
    (match) => `<span>${match}</span>`
  );

  return <Text type={type} component={component} height={height} dangerouslySetInnerHTML={{ __html: replacedText }} />;
};

export default ColoredText;

export const Text = styled(({ component: Component = MainText, ...props }) => <Component {...props} />)`
  text-overflow: ellispis;
  overflow: ${({ type }) => type === 'review' ? 'scroll' : 'hidden' }; 
  text-align: left;
  height: ${({height}) => height || 'auto'};
  span {
    color: var(--accent);
  }
`;
