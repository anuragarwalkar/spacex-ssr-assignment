import React, { ReactNode, Fragment } from 'react';
// import Link from 'next/link';
import Head from 'next/head';
import styles from './Layout.module.scss';

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'No Title!' }: Props) => (
  <Fragment>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
    </Head>
    <header className={styles.header}>
        <span>SpaceX Launch Programs</span>
    </header>
    <div id="content">
    {children}
    </div>
    <footer id="footer">
      <div>Developed by: <a href="https://bit.ly/annurag" target="_blank">Anurag</a></div>
    </footer>
    </Fragment>
)

export default Layout
