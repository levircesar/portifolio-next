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
          <h2>Bem vindo</h2>
          <p>Me Chamo Levir César </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, 
            blanditiis laudantium laborum nemo, voluptatem perferendis odit 
            excepturi accusantium aspernatur neque sit amet placeat quaerat.
             Non laudantium quibusdam pariatur quam facilis.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, 
            blanditiis laudantium laborum nemo, voluptatem perferendis odit 
            excepturi accusantium aspernatur neque sit amet placeat quaerat.
              Non laudantium quibusdam pariatur quam facilis.</p>
        </main>
      </div>
  )
}
