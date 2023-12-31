import React from 'react';
import { useSiteMetadata } from '../hooks/useSiteMetadata';

const SEO = ({ title, description, keywords, pathname, children }) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    keywords: defaultKeywords,
    siteUrl,
  } = useSiteMetadata();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    keywords: keywords || defaultKeywords,
    url: `${siteUrl}${pathname || ``}`,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name='description' content={seo.description} />
      <link
        rel='icon'
        href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>📝</text></svg>"
      />
      <meta name='keywords' content={seo.keywords} />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='robots' content='index, follow' />
      <meta property='og:image' content='/src/assets/og.png' />
      <meta property='og:image:width' content='400' />
      <meta property='og:image:width' content='50' />
      {children}
    </>
  );
};

export default SEO;
