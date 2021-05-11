import React  from 'react';
import Head from 'next/head';
import NewSideBar from '../comṕonents/NewSideBar';
import styles from '../styles/error.module.scss';
import Link from 'next/link';

export default function error(){
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Levir Lemos | Website</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>
      <main> 
        <div className={styles.content}>
          <img src="/cancel.svg" alt=""/>
          <h2>Ops... Sua Compra foi cancelada ;-; </h2>
          <Link href={`/store`}>
               <button>Voltar para a loja</button>
          </Link>
        </div>
      </main>

  </div>
  )
}

