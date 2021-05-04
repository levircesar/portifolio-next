import React from 'react';
import styles from '../styles/admin.module.scss';
import Link from 'next/link';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { api } from '../services/api';
import { FaForward } from 'react-icons/fa';

interface Episode{
  id: number;
  name: string;
}

type HomeProps = {
  repos: Episode[];
}

export default function Home({repos} : HomeProps) {
  const reposNumber = repos.length;   

  function handleLogin(e){
    e.preventDefault();
    alert('Login invalido');
  }

  return (
      <>
        <div className={styles.banner}>
          <Head>
            <title>Levir Lemos | admin</title>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
          </Head>
          <div className={styles.content}>
            <img src="/authentication.svg" alt="imagem de login"/>
            <form>
              <h2>Painel do Admin</h2>
              <input type="text" name="email" id="email" placeholder="Email..."/>
              <input type="password" name="password" id="password" placeholder="Senha..."/>
              <div className={styles.footer}>
                <input type="submit" value="Enviar" onClick={(e)=>handleLogin(e)}/>
                <Link href="/">
                  <p>Voltar pra home</p>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </>
  )
}

export const getStaticProps: GetStaticProps = async  () => {
  const { data } = await api.get('repos');

  const repos = data.map(episode  => {
    return {
      id: episode.id,
      name: episode.name
    };
  })

  //const latestrepos = repos.slice(0, 2);
  //const allrepos = repos.slice(2, repos.length);

  return  {
    props: {
      repos
    },
    revalidate: 60 * 60,
  } 
}