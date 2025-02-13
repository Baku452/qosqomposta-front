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
import Head from 'next/head';

const MyApp: NextPage<AppProps> = ({ Component, ...rest }) => {
  const router = useRouter();
  const isDashboard = router.pathname.startsWith('/dashboard');

  if (isDashboard) {
    return (
      <Provider store={appStore}>
        <PersistGate loading={null} persistor={persistor}>
          <DashboardLayout>
            <Head>
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <Component {...rest.pageProps} />
          </DashboardLayout>
        </PersistGate>
      </Provider>
    );
  } else {
    return (
      <Provider store={appStore}>
        <LayoutWeb>
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          </Head>
          <Component {...rest.pageProps} />
        </LayoutWeb>
      </Provider>
    );
  }
};

export default MyApp;
