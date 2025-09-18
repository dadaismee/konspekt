import React from 'react';
import { styled } from 'styled-components';
import { MainText, SmallerText } from '../styles/TextStyles';
import { mediaQueries } from '../styles/GlobalStyles';

// Separate typograf function
export const typograf = (text) => {
  const prepositionsPattern = /(\s)(и|из|к|или|в|с|на|не|по|для|от)(\s)/g;
  return text.replace(prepositionsPattern, '$1$2&nbsp;');
};

// Separate function to highlight text with spans
export const highlightText = (text, phrases) => {
  let processedText = text;
  phrases.forEach(phrase => {
    const escapedPhrase = phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    processedText = processedText.replace(
      new RegExp(escapedPhrase, 'g'),
      (match) => `<span>${match}</span>`
    );
  });
  return processedText;
};

const ColoredText = ({ data, component, height, type, lineHeight }) => {
  const { mainText, spanText } = data;
  
  // First highlight phrases, then apply typography
  const processedText = typograf(highlightText(mainText, spanText));

  return <Text type={type} component={component} height={height} lineHeight={lineHeight} dangerouslySetInnerHTML={{ __html: processedText }} />;
};

export default ColoredText;

export const Text = styled(({ component: Component = SmallerText, ...props }) => <Component {...props} />)`
  overflow: ${({ type }) => type === 'review' ? 'scroll' : 'none' }; 
  text-align: left;
  height: ${({height}) => height || 'auto'};
  font-family: 'Coolvetica Lite';
  line-height: ${({ lineHeight }) => lineHeight || '100%'};
  span {
    font-family: 'Coolvetica';
    //color: var(--accent);
  }

  @media (max-width: ${mediaQueries.phone}) {
    font-size: 24px;
  }
`;
;
