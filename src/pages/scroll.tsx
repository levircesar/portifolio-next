import { GetStaticProps } from 'next';
import { api } from '../services/api';
import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import React from 'react';
import scroll from 'react-scroll';
import Sidebar from '../comṕonents/Sidebar';
import styles from '../styles/panel.module.scss';

interface Episode{
  id: number;
  name: string;
}

type HomeProps = {
  repos: Episode[];
}

export default function Home({repos} : HomeProps) {
  return (
      <>
        <div className={styles.wrapper}>
              <Sidebar/>
              <main> 
                <button><scroll.Link to="service" spy={true} smooth={true}>Service</scroll.Link></button>
                  <div style={{height:800}}></div>
                    <div id="service" >
                      <h1>This is Service section</h1>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellendus. Totam nihil similique a repellat minus dolor amet quasi. Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
                  </div>
              </main>
            </div>
                
       
      </>
  )
}

export const getStaticProps: GetStaticProps = async  () => {
  const { data } = await api.get('repos')

  const repos = data.map(episode=> {
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