import React  from 'react';
import Head from 'next/head';
import NewSideBar from '../comṕonents/NewSideBar';
import styles from '../styles/error.module.scss';

export default function error(){
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Levir Lemos | Website</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>
      <main> 
        <div className={styles.content}>
          <img src="/thanks.svg" alt=""/>
          <h2 style={{margin:'10px'}}>Muito obrigado pela sua doação !!! </h2>
        </div>
      </main>
  </div>
  )
}

