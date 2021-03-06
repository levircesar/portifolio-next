import React  from 'react';
import Head from 'next/head';
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
          <img src="/404.svg" alt=""/>
          <h2>Ops... Não Encontramos essa página</h2>
        </div>
      </main>

  </div>
  )
}

