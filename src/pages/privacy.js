import { graphql, Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { SEO } from '../components';
import { Logo } from '../components/Header';

const privacy = ({ data }) => {
  const { html } = data.markdownRemark;

  return (
    <Wrapper>
      <Link to='/' target='_blank'>
        <Logo>Конспект</Logo>
      </Link>
      <Block dangerouslySetInnerHTML={{ __html: html }} />
    </Wrapper>
  );
};

export default privacy;

export const query = graphql`
  query MyQuery {
    markdownRemark {
      html
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
`;

const Block = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  h1 {
    font-size: 64px;
  }
  h2 {
    font-size: 40px;
  }

  p {
    font-size: 24px;
  }
`;

export const Head = () => <SEO />;
