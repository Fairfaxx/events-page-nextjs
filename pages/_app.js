import {Fragment} from 'react';
import Layout from '../components/layout/layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Layout />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp
