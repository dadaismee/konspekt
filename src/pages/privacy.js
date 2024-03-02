import { graphql, Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { SEO, Header, Footer } from '../components';

const privacy = ({ data }) => {
  const { html } = data.markdownRemark;

  return (
    <Wrapper>
      <Header/>
      <Block dangerouslySetInnerHTML={{ __html: html }} />
      <Footer/>
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
