import Head from 'next/head';
import React from 'react';
import Sidebar from '../comṕonents/Sidebar';
import styles from '../styles/profile.module.scss';
import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';
import NewSideBar from '../comṕonents/NewSideBar';

export default function Profile(){

  const currentDate = format(new Date(), 'EEEEEE , d MMMM Y' ,{
    locale: ptBR,
  });

  return (
        <div className={styles.wrapper}>
        <Head>
          <title>Levir Lemos | Website</title>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </Head>
        <NewSideBar/>
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
              <h2>
              Seja muito bem vindo(a)! Fiz esse site usando meus conhecimentos em HTML, CSS, Javascript. 
              Sinta-se avontade para navegar xD 
              </h2>
              <p>Esse pequeno site conta com a tecnologia recente do NextJS e outras funcionalidades do Node JS</p>
              <p>Graduando em Engenharia de Computação na Universidade 
                Federal do Ceara (UFC) . A paixão por tecnologia me levou a ingressar em 2017 na faculdade , 
                onde aprendi muito com pessoas altamente capacitadas.
                </p>
                <p>Atuo como desenvolvedor Fullstack com ênfase em desenvolvimento Front-End.
                  Especialista em criação de Landing Pages, Sites Institucionais e E-commerce.
                </p>
                <p style={{
                  marginTop: '50px',
                  textAlign :'end'
                }}>
                  Fortaleza/CE -  <span style={{textTransform: 'capitalize'}}>{currentDate}</span>
                  </p>
            </section>
          </div>
         
        </main>
      </div>
  )
}

