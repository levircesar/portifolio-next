import React from 'react';
import Sidebar from '../comṕonents/Sidebar';
import styles from '../styles/error.module.scss';

export default function error(){
  return (
    <div className={styles.wrapper}>
    <Sidebar/>
    <main> 
      <div className={styles.content}>
        <img src="/404.svg" alt=""/>
        <h2>Ops... Não Encontramos essa página</h2>
      </div>
    </main>
  </div>
  )
}

