import { GetStaticProps } from 'next';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import { api } from '../services/api';
import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import styles from '../styles/panel.module.scss';
import Sidebar from '../comṕonents/Sidebar';
import Github from '../comṕonents/Github';

interface Episode{
  id: number;
  name: string;
  html_url: string;
  description: string;
}

type HomeProps = {
  repos: Episode[];
}

export default function Panel({repos}:HomeProps) {
  
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Levir Lemos | Panel </title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>
      <Sidebar/>
      <main> 
          <div className={styles.gits}>
            {repos.map((episode,index) =>{
              return (
                <Github key={episode.id}
                  name={episode.name} 
                  url={episode.html_url} 
                  description={episode.description}
                />  
              )
            })}
          </div>
          
      </main>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async  () => {
  const { data } = await api.get('repos')

  const repos = data.map(episode  => {
    return {
      id: episode.id,
      name: episode.name,
      html_url: episode.html_url,
      description: episode.description
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