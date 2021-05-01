import React from 'react';
import Head from 'next/head';
import styles from '../styles/profile.module.scss';
import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';
import NewSideBar from '../comṕonents/NewSideBar';
import Codecard from '../comṕonents/CodeCard';

export default function Profile(){

  const commands = [
    'yarn dev',
    'yarn start'
  ] ;

  

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

              <p>Esse site conta com a tecnologia recente do NextJS e 
                seu script base foi gerado a partir do comando
              </p>

              <Codecard text="yarn create next-app" />

              <p>Caso queira copiar este projeto, adicionei um repositório 
                público para ajudar iniciantes na criação de projetos com next.
                Caso tenha o github CLI, o projeto pode ser clonado em
              </p>

              <Codecard text="gh repo clone levircesar/portifolio-next" />
             
              <p>Graduando em Engenharia de Computação na Universidade 
                Federal do Ceara (UFC) . A paixão por tecnologia me levou a ingressar em 2017 na faculdade , 
                onde aprendi muito com pessoas altamente capacitadas.
              </p>

              <p>Atuo como desenvolvedor Fullstack com ênfase em desenvolvimento Front-End.
                Especialista em criação de Landing Pages, Sites Institucionais e E-commerce.
              </p>

              <h2 style={{margin:'10px',textAlign:'center'}}>Apoie esse projeto com qualquer valor</h2>

              <form style={{textAlign:'center'}} action="https://www.paypal.com/donate" method="post" target="_top">
                <input type="hidden" name="hosted_button_id" value="ZQR9J5LBZAMLN" />
                <input type="image" src="https://www.paypalobjects.com/pt_BR/BR/i/btn/btn_donateCC_LG.gif" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                <img alt="" src="https://www.paypal.com/pt_BR/i/scr/pixel.gif" width="1" height="1" />
              </form>


              <p style={{
                margin: '50px',
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

