import React from 'react';
import styled from 'styled-components';

const typograf = (text) => {
  const prepositionsPattern = /(\s)(и|из|к|или|в|с|на|не|по|для|от)(\s)/g;
  return text.replace(prepositionsPattern, ' $2&nbsp;');
};

const Typograf = ({Component}) => {
  const StyledTypograf = styled(Component)`
  `;

  return ({ children, ...props }) => {
    const processedText = typograf(children);
    return (
      <StyledTypograf {...props} dangerouslySetInnerHTML={{ __html: processedText }} />
    );
  };
};

export default Typograf;
