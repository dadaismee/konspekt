import React from 'react';
import { styled } from 'styled-components';
import { MainText } from '../styles/TextStyles';

const ColoredText = ({ data }) => {
  const { mainText, spanText } = data;
  const replacedText = mainText.replace(
    new RegExp(spanText.join('|'), 'g'),
    (match) => `<span>${match}</span>`
  );

  return <Text dangerouslySetInnerHTML={{ __html: replacedText }} />;
};

export default ColoredText;

export const Text = styled(MainText)`
  text-align: left;
  span {
    color: var(--accent);
  }
`;
