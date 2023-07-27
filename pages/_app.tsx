import '../styles/globals.scss';
import LayoutWeb from '../layouts/web.layout';
import Script from 'next/script';
import 'normalize.css/normalize.css';
import { Provider } from 'react-redux';
import { appStore, persistor } from '@/store/appStore';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { PersistGate } from 'redux-persist/integration/react';
import DashboardLayout from '@/layouts/Dashboard';
import { useRouter } from 'next/router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const MyApp: NextPage<AppProps> = ({ Component, ...rest }) => {
  const queryClient = new QueryClient();
  const router = useRouter();
  const isDashboard = router.pathname.startsWith('/dashboard');

  if (isDashboard) {
    return (
      <QueryClientProvider client={queryClient}>
        <Provider store={appStore}>
          <PersistGate loading={null} persistor={persistor}>
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
          </PersistGate>
        </Provider>
      </QueryClientProvider>
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
