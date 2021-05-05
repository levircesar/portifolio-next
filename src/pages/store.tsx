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
  product?: string;
  unit_amount?:number;
  unit_amount_decimal?:number;
}

type StoreProps = {
  product : Produtos[];
  price: Produtos[];
}

export const getStaticProps: GetStaticProps = async () =>{
  const stripe = new Stripe(stripeConfig.secretKey, {
    apiVersion: '2020-08-27'
  });

  const product = await stripe.products.list();
  const price = await stripe.prices.list();

  return {
    props:{
      product: product.data, 
      price: price.data,
    },
    revalidate: 60 * 60 * 8, 
  };
};

export default function Produtos({ product , price } :StoreProps) {

  
 // console.log(price);
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
                <div className={styles.box}  key={item.id}>
                  <h2>{item.name}</h2>
                  {item.images && <img width={250} height={250} src={item.images[0]} />}
                  <h2>
                    {'R$ '}
                    {(price.find(valor => valor.product === item.id).unit_amount / 100).toFixed(2)}
                  </h2>
                  <Link href={`/store/${item.id}`}>
                    <button>Ver produto</button>
                  </Link>
                </div>
              )})}
        </div>
      </main>
    </div>
    
  )
};
