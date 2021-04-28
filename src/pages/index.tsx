import React from 'react';
import styles from '../styles/home.module.scss';
import Link from 'next/link';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { api } from '../services/api';

interface Episode{
  id: number;
  name: string;
}

type HomeProps = {
  repos: Episode[];
}

export default function Home({repos} : HomeProps) {
  const reposNumber = repos.length;

  return (
      <>
        <div className={styles.banner}>
          <Head>
            <title>Levir Lemos | Website</title>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
          </Head>
          <div className={styles.overlay}></div>
          <div className={styles.content}>

            <img src="/avatar.jpeg" alt="Levir Lemos"/>
            <div className={styles.box}>
              <h2>Levir Lemos</h2>
              <p>Engenheiro de Computação</p>
              <p>{reposNumber} projetos públicos no Github</p>
              <p>site em construção</p>
              
              <Link href="/panel">
                <button>Clique</button>
              </Link>


            </div>
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