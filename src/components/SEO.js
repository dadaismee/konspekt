import React from 'react';
import { Helmet } from 'react-helmet';
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
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <meta property="og:image" content={`${siteUrl}/src/assets/logo-with-bg.png`} />
      <meta property="og:image:width" content="400" />
      <meta property="og:image:height" content="50" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={seo.url} />
      <link rel="canonical" href={seo.url} />
      <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "Course",
          "name": "${seo.title}",
          "description": "${seo.description}",
          "provider": {
            "@type": "Organization",
            "name": "konspekt.io",
            "url": "https://konspekt.io"
          }
        }
      `}</script>
      {children}
    </Helmet>
  );
};

export default SEO;