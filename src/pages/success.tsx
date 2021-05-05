import React  from 'react';
import Head from 'next/head';
import NewSideBar from '../comṕonents/NewSideBar';
import styles from '../styles/error.module.scss';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function error(){
  const {
    query: { itemName , valor},
  } = useRouter();

  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Levir Lemos | Website</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>
      <NewSideBar/>
      <main> 
        <div className={styles.content}>
          <img src="/success.svg" alt=""/>
          <h2 style={{margin:'10px'}}>Compra realizada com sucesso !!! </h2>
          <h2>Item comprado : {itemName} </h2>
          <h2>Valor pago: {`R$ ${(Number(valor)/100).toFixed(2)}`} </h2>
          <Link href={`/store`}>
               <button>Voltar para a loja</button>
          </Link>
        </div>
      </main>

  </div>
  )
}

