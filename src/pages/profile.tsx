import { GetStaticProps } from 'next';
import React from 'react';
import scroll from 'react-scroll'
import Sidebar from '../comṕonents/Sidebar';
import styles from '../styles/profile.module.scss';

export default function Profile(){
  return (
        <div className={styles.wrapper}>
        <Sidebar/>
        <main> 
          <div className={styles.header}>
            <div className={styles.headerText}>
              <h2>Bem vindo</h2> 
              <p>Me Chamo Levir César, </p>
            </div>
            <img src="/portifolio.svg" alt=""/>
          </div>
          
          <div className={styles.content}>
            <section>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Optio temporibus eum omnis officia ut inventore necessitatibus 
                  distinctio error maxime dicta iusto natus minima repellat, ipsum,
                  a itaque eaque iste doloremque?
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Optio temporibus eum omnis officia ut inventore necessitatibus 
                  distinctio error maxime dicta iusto natus minima repellat, ipsum,
                  a itaque eaque iste doloremque?
                </p>
            </section>
          </div>
         
        </main>
      </div>
  )
}

