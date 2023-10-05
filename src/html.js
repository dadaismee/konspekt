import PropTypes from 'prop-types';
import React from 'react';

const Html = ({ headComponents, body, postBodyComponents }) => (
  <html lang='en'>
    <head>
      {headComponents}
      <script
        type='text/javascript'
        dangerouslySetInnerHTML={{
          __html: `
        <!-- Yandex.Metrica counter -->
        <script type="text/javascript" >
            (function (m, e, t, r, i, k, a) {
                m[i] = m[i] || function () { (m[i].a = m[i].a || []).push(arguments) };
                m[i].l = 1 * new Date(); k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a)
            })
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

            ym(${process.env.YANDEX_METRICA}, "init", {
                clickmap: true,
                trackLinks: true,
                accurateTrackBounce: true,
                webvisor: true
            });
        </script>
        <noscript><div><img src="https://mc.yandex.ru/watch/YOUR_YANDEX_METRICA_TRACKING_ID" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
        <!-- /Yandex.Metrica counter -->
      `,
        }}
      />
    </head>
    <body>
      <div id='___gatsby' dangerouslySetInnerHTML={{ __html: body }} />
      {postBodyComponents}
    </body>
  </html>
);

Html.propTypes = {
  headComponents: PropTypes.node.isRequired,
  body: PropTypes.node.isRequired,
  postBodyComponents: PropTypes.node.isRequired,
};

export default Html;
