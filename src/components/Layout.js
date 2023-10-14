import React from 'react';
import { Helmet } from 'react-helmet';
import SEO from './SEO';

const Layout = ({ children }) => {
  return (
    <div>
      <Helmet>
        <script
          type='text/javascript'
          dangerouslySetInnerHTML={{
            __html: `
          (function (m, e, t, r, i, k, a) {
            m[i] = m[i] || function () { (m[i].a = m[i].a || []).push(arguments); };
            m[i].l = 1 * new Date();
            k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a);
          })(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js', 'ym');

          ym(${process.env.YANDEX_METRICA}, 'init', {
            clickmap: true,
            trackLinks: true,
            accurateTrackBounce: true,
          });
        `,
          }}
        />
      </Helmet>
      <SEO />
      {children}
    </div>
  );
};

export default Layout;