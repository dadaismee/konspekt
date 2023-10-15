import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';

const OpenGraphImage = ({ data }) => (
  <Img fluid={data.ogImage.childImageSharp.fluid} alt='Open Graph Image' />
);

export const query = graphql`
  query {
    ogImage: file(relativePath: { eq: "og.png" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 50) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default OpenGraphImage;
