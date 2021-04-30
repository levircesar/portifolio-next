import React from 'react';
import { format ,parseISO} from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { GetStaticPaths, GetStaticProps } from 'next';
import { SecondApi } from '../../services/api';
import styles from './noticia.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import { FaBackward } from 'react-icons/fa';
import NewSideBar from '../../comṕonents/NewSideBar';

type Episode = {
  id: string;
  title: string;
  thumbnail: string;
  description: string;
  members: string;
  duration: number;
  durationAsString: string;
  url: string;
  publishedAt: string;
}

type EpisodeProps = {
  episode : Episode;
}

export default function Episode({episode}: EpisodeProps){
 
  return (
    <div className={styles.wrapper}>
      <NewSideBar/>
      <main> 
          <div className={styles.episode}>
          <Head> 
            <title>Levir Lemos | {episode.title} </title>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
          </Head>
          <div className={styles.thumbnailContainer}>
            <Link href="/noticias">
              <button type="button">
                <FaBackward/>
              </button>
            </Link>
            
            <Image
              width={700}
              height={160}
              src={episode.thumbnail}
              objectFit="cover"
            />
          </div>

          <header>
            <h1>{episode.title}</h1>
            <span>{episode.members}</span>
            <span>{episode.publishedAt}</span>
            <span>{episode.durationAsString}</span>
          </header>

          <div 
            className={styles.description} 
            dangerouslySetInnerHTML={{ __html: episode.description }}
          />
        </div>
      </main>

    </div>
  ) 
}

export const getStaticPaths : GetStaticPaths = async () =>{
  return {
    paths: [],
    fallback : 'blocking'
  }
}

export const getStaticProps : GetStaticProps = async (ctx) =>{
  const { slug } = ctx.params;

  const { data } = await SecondApi.get(`/episodes/${slug}`);

  if (!data) {
    return { 
      redirect: {
        destination: '/404',
        permanent: false,
      },
    }
  }

  const episode = {
    id: data.id,
    title: data.title,
    thumbnail: data.thumbnail,
    members: data.members,
    publishedAt: format(parseISO(data.published_at), 'd MMM yy', { locale: ptBR }),
    duration: Number(data.file.duration),
    description: data.description,
    url: data.file.url,
  };

  return  {
    props: {
      episode,
    },
    revalidate: 60 * 60 * 24, //24 hours
  }
}