import '../styles/globals.css';
import LayoutWeb from '../layouts/web.layout';
import Script from 'next/script';
import initAuth from '../initAuth';
import AuthLayout from '../layouts/authLayout';
import 'normalize.css/normalize.css';
import Head from 'next/head';

function MyApp({ Component, pageProps, router }) {
  initAuth();

  if (router.pathname.startsWith('/auth')) {
    return (
      <>
        <Head>
          <link href="https://fonts.cdnfonts.com/css/eveleth" rel="stylesheet" />
          <link href="https://fonts.cdnfonts.com/css/isidora" rel="stylesheet" />
        </Head>
        <AuthLayout>
          <Script
            id="tag-manager"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-53HXJRR');`,
            }}
          ></Script>
          <Component {...pageProps} />
        </AuthLayout>
      </>
    );
  }
  return (
    <LayoutWeb>
      <Script
        id="tag-manager"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-53HXJRR');`,
        }}
      ></Script>
      <Component {...pageProps} />
    </LayoutWeb>
  );
}

export default MyApp;
