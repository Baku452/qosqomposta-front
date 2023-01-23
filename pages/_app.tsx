import '../styles/globals.css';
import LayoutWeb from '../layouts/web.layout';
import Script from 'next/script';
import 'normalize.css/normalize.css';

function MyApp({ Component, pageProps, router }) {
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
