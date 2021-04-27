import React from 'react';
import '../styles/global.scss';
import styles from '../styles/app.module.scss';

function MyApp({ Component, pageProps }) {
  return (
      <> 
        <Component {...pageProps} />
      </>
    
  )
}

export default MyApp
 