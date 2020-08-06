import '../scss/styles.scss';
import { NextComponentType } from 'next';

interface MyAppModel { Component: NextComponentType, pageProps: any };

export default function App({ Component, pageProps }: MyAppModel) {
  return <Component {...pageProps} />
}