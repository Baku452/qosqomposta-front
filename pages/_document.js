/* eslint-disable @next/next/no-document-import-in-page */
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <script
          defer
          src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places&callback=YOUR_CALLBACK_NAME`}
        ></script>
        <link href="https://fonts.cdnfonts.com/css/eveleth" rel="stylesheet" />
        <link href="https://fonts.cdnfonts.com/css/c" rel="stylesheet" />
      </Head>
      <body>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-53HXJRR"
            height="0"
            width="0"
            style="display:none;visibility:hidden"
          ></iframe>
         `,
          }}
        ></noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
