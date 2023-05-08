import '../styles/globals.scss';
import LayoutWeb from '../layouts/web.layout';
import Script from 'next/script';
import 'normalize.css/normalize.css';
import { Provider } from 'react-redux';
import { appStore } from '@/store/appStore';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import DashboardLayout from '@/layouts/dashboard.layout';

const MyApp: NextPage<AppProps> = ({ Component, ...rest }) => {
  const isDashboard = Component.name.startsWith('Dashboard');

  if (isDashboard) {
    return (
      <Provider store={appStore}>
        <DashboardLayout>
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
          <Component {...rest.pageProps} />
        </DashboardLayout>
      </Provider>
    );
  } else {
    return (
      <Provider store={appStore}>
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
          <Component {...rest.pageProps} />
        </LayoutWeb>
      </Provider>
    );
  }
};

export default MyApp;
