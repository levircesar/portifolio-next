import React from 'react';
import Stripe from 'stripe';
import { GetStaticPaths, GetStaticProps } from 'next';
import stripeConfig from '../../config/stripe';
import Link from 'next/link';


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

  console.log(product);

  return {
    props:{
      product: product.data, 
    },
  };
};

export default function Produtos({ product } :StoreProps) {

  //console.log(product);
  return (
    <div>
       {product.map((item,index) =>{
        return (
          <ul key={item.id}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <Link href={`/store/${item.id}`}>
               <button>Ver mais</button>
            </Link>
             {item.images && <img width={250} src={item.images[0]} />}
          </ul>
        )})}
    </div>
  )
};
