import '../scss/styles.scss';
import { NextComponentType } from 'next';

interface MyAppModel {Component: NextComponentType, pageProps: any};

const MyApp = ({ Component, pageProps }: MyAppModel) => {
  return <Component {...pageProps} />
}

export default MyApp;