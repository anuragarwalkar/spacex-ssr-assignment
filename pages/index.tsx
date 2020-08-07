import React, { useEffect } from 'react';
import Layout from '../components/layout/Layout';
import Filter from '../components/filters/Filter';
import LaunchProgram from '../components/Program/LaunchProgram';
import styles from './index.module.scss';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

export interface IndexPageProps {
  query: any
}

const IndexPage: NextPage<IndexPageProps> = (props) => {
  const router = useRouter();

  useEffect(() => {
    const { asPath } = router;
    if (asPath.length === 1)
      router.push({ query: { limit: 100 } });
  }, []);

  return (
    <Layout title={'SpaceX Launch Programs'}>
      <div className={styles.topContainer}>
        <div className="filter">
          <Filter {...props}></Filter>
        </div>
        <div className="launchProgram">
          <LaunchProgram {...props}></LaunchProgram>
        </div>
      </div>
    </Layout>
  );
}

IndexPage.getInitialProps = (ctx: any) => {
  const query = ctx.query;
  return { query };
}

export default IndexPage;
