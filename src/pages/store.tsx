import React from 'react';
import Stripe from 'stripe';
import { GetStaticPaths, GetStaticProps } from 'next';
import stripeConfig from '../../config/stripe';
import Link from 'next/link';
import Head from 'next/head';
import NewSideBar from '../comṕonents/NewSideBar';
import styles from '../styles/store.module.scss';

type Produtos = {
  id: string; 
  description: string;
  images: string;
  name: string;
}

type StoreProps = {
  product : Produtos[];
}

export const getStaticProps: GetStaticProps = async () =>{
  const stripe = new Stripe(stripeConfig.secretKey, {
    apiVersion: '2020-08-27'
  });

  const product = await stripe.products.list();

  //console.log(product);

  return {
    props:{
      product: product.data, 
    },
    revalidate: 60 * 60 * 8, 
  };
};

export default function Produtos({ product } :StoreProps) {

  //console.log(product);
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Levir Lemos | Website</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>
      <NewSideBar/>
      <main> 
      <div className={styles.content}>
        {product.map((item,index) =>{
          return (
            <ul key={item.id}>
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              {item.images && <img width={250} src={item.images[0]} />}
              <Link href={`/store/${item.id}`}>
                <button>Ver produto</button>
              </Link>
            </ul>
          )})}
      </div>
      </main>
    </div>
    
  )
};
