import React from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { api } from '../services/api';
import styles from '../styles/noticia.module.scss';
import NewSideBar from '../comṕonents/NewSideBar';

type Episode = {
  id: number;
  name: string;
  html_url: string;
  description: string;
  homepage: string;
  language: string;
}

type HomeProps = {
  latestEpisodes : Episode[];
  allEpisodes : Episode[];
}

export default function Home({latestEpisodes , allEpisodes}: HomeProps) {

  const episodeList = [...latestEpisodes,...allEpisodes]; 
  
  return (
    <div className={styles.wrapper}>
      <main>
        <div className={styles.homepage}>
        <Head>
          <title>Levir Lemos | Website</title>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </Head>

        
        <section className={styles.allEpisodes}>
            <h2>Todos projetos</h2>

            <table cellSpacing={0}>
              <thead>
                <tr>
                  <th>Project</th>
                  <th>Descrição</th>
                  <th>Homepage</th>
                  <th>Linguagem</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {allEpisodes.map((episode,index) =>{
                  return (
                    <tr key={episode.id}>
                      <td>
                      <a href={episode.html_url}>{episode.name}</a>
                      </td> 
                      <td>{episode.description}</td>
                      <td style={{width: 80}} >
                        {episode.homepage
                        ? <a href={episode.homepage}>{episode.homepage}</a>
                        : <p>Não possui</p>
                        }
                      </td>
                      <td>{episode.language
                      ? <span>{episode.language}</span> 
                      : <span>Não identificado</span> }</td>
                      <td>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
        </section>
      </div>
      </main>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async  () => {
  const { data } = await api.get('repos' , {
    params: {
      order: 'desc',
      per_page: 40
    }
  })

  const episodes = data.map(episode => {
    return {
      id: episode.id,
      name: episode.name,
      html_url: episode.html_url,
      description: episode.description,
      homepage:episode.homepage,
      language: episode.language
    };
  })

  const latestEpisodes = episodes.slice(0, 2);
  const allEpisodes = episodes.slice(0, episodes.length);

  return  {
    props: {
      latestEpisodes,
      allEpisodes,
    },
    revalidate: 60 * 60 * 8,
  } 
}