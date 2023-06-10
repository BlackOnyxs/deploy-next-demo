import { FC, PropsWithChildren } from 'react';
import Head from 'next/head';

import styles from './MainLayout.module.css';
import { NavBar } from '../NavBar';

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className={styles.container}>
        <Head>
          <title>Home Page</title>
          <meta name="description" content="Robin's page" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <NavBar />
  
        <main className={styles.main}>

          { children }
        </main>
  
      </div>
    )
}
