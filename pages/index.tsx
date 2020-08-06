import React, { useEffect } from 'react';
import Layout from '../components/layout/Layout';
import Filter from '../components/filters/Filter';
import LaunchProgram from '../components/Program/LaunchProgram';
import styles from './index.module.scss';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

export interface IndexPageProps {

}

const IndexPage: NextPage<IndexPageProps> = () => {
  const router = useRouter();

  useEffect(() => {
    router.push({ query: { limit: 100 } })
  }, [])

  return (
    <Layout title={'SpaceX Launch Programs'}>
      <div className={styles.topContainer}>
        <div className="filter">
          <Filter></Filter>
        </div>
        <div className="launchProgram">
          <LaunchProgram></LaunchProgram>
        </div>
      </div>
    </Layout>
  );
}

export default IndexPage;
