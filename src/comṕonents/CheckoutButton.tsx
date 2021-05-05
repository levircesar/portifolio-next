import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import stripeConfig from '../../config/stripe';

const stripePromise = loadStripe(stripeConfig.publicKey);

interface Props {
  skuId: string;
  itemName: string;
}

const CheckoutButton: React.FC<Props> = ({ skuId, itemName }) => {
  async function handleClick() {
    const stripe = await stripePromise;

    const { error } = await stripe.redirectToCheckout({
      lineItems: [{price: skuId, quantity: 1 }],
      mode: 'payment',
      successUrl: `https://levirlemos.online/success?itemName=${itemName}`,
      cancelUrl: 'https://levirlemos.online/cancel',
    });

    if (error) {
      console.log(error);
    }
  }
  return (
    <button style={{padding: '20px',width: '200px'}} role="link" onClick={handleClick}>
      Comprar
    </button>
  );
};

export default CheckoutButton;