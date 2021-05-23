import React from 'react';
import { loadStripe  } from '@stripe/stripe-js';
import stripeConfig from '../../config/stripe';

const stripePromise = loadStripe(stripeConfig.publicKey);

interface Props {
  skuId: string;
  itemName: string;
  valor: number;
  titulo?:string;
}

const CheckoutButton: React.FC<Props> = ({ skuId, itemName ,valor ,titulo}) => {
  function string_to_slug (str) {
    str = str.replace(/^\s+|\s+$/g, ''); // trim
    str = str.toLowerCase();
  
    // remove accents, swap ñ for n, etc
    var from = "àáäãâèéëêìíïîòóöôùúüûñç·/_,:;";
    var to   = "aaaaaeeeeiiiioooouuuunc------";
    for (var i=0, l=from.length ; i<l ; i++) {
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
        .replace(/\s+/g, '-') // collapse whitespace and replace by -
        .replace(/-+/g, '-'); // collapse dashes

    return str;
  }
 
  async function handleClick() {
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      lineItems: [{price: skuId, quantity: 1 }],
      mode: 'payment',
      successUrl: `https://levirlemos.online/success?itemName=${string_to_slug(itemName)}&valor=${valor}`,
      cancelUrl: 'https://levirlemos.online/cancel',
      billingAddressCollection: 'required',
      shippingAddressCollection :{ allowedCountries:['BR'] },
    });

    if (error) {
      console.log(error);
    }
  }
  return (
    <button style={{padding: '20px',width: '200px'}} role="link" onClick={handleClick}>
      {titulo ?<p>{titulo}</p>: <p>Comprar</p>}
    </button>
  );
};

export default CheckoutButton;