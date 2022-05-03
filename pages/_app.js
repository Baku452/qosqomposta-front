import '../styles/globals.css';
import LayoutWeb from 'layouts/web.layout';

function MyApp({ Component, pageProps }) {
  return (
    <LayoutWeb>
      <Component {...pageProps} />
    </LayoutWeb>
  );
}

export default MyApp;
