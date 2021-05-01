import React, { useState } from 'react';
import styles from  './styles.module.scss';
import Link from 'next/link';

import { 
  FaBars ,
  FaFacebook,
  FaInstagram,
  FaTimes,
  FaWhatsapp,
  FaYoutube
} from 'react-icons/fa';

import {SideBarData} from '../../utils/SideBarData';


export default function NewSideBar(){
  const [sidebar , setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
      <>
        {sidebar && (
          <div onClick={showSidebar} className={styles.overlay}></div>
        )}

        <div className={styles.desktop}>
          <div className={styles.container}>
            <div className={styles.boxImg}>
              <img src="/avatar.jpeg" alt="Levir Lemos"/>
              <Link href="/profile">
                <h2>
                  <span>&lt;</span> Levir Lemos <span>/&gt;</span>
                </h2>
              </Link>
              <p>Engenheiro de Computação</p>
            </div>
            
            <div className={styles.boxText}>
              <p>Estudante do Curso de Engenharia de Computação na Universidade Federal do Ceará,
                apaixonado por tecnologia e desenvolvimento web e mobile XD
              </p>
              <br/>
              <p style={{color:'purple'}}>Level 22</p>
            </div>

            <div className={styles.socialMedia}>
                <a href="https://www.instagram.com/levirlms/"><FaInstagram/></a>
                <a href="https://www.facebook.com/levir.lemos/"><FaFacebook/></a>
                <a href="https://www.youtube.com/channel/UCWE4KnYvGHVtJ2oWfZCSocA"><FaYoutube/></a>
                <a href="https://wa.me/5585998413146"><FaWhatsapp/></a>
            </div>

            <div className={styles.navigationButtons}>
              {SideBarData.map((item,index) => {
                return (
                  <Link key={index} href={item.path}><button>{item.title}</button></Link>
                )
              })}
            </div>
            
        
          </div>
        </div>
        
        <div className={styles.mobile}>
          <div className={styles.navbar}>
            <div className={styles.boxImg}>
              <Link href="/profile">
                <h2>
                  <span>&lt;</span> Levir Lemos <span>/&gt;</span>
                </h2>
              </Link>
            </div>
            <button className={styles.menuBars}>
              <FaBars onClick={showSidebar}/>
            </button>
          </div> 
          <nav className={sidebar? `${styles.navMenu} ${styles.active}`:styles.navMenu}>
            <ul className={styles.navMenuItems} >
              <li className={styles.navBarToogle}>
                <button className={styles.menuBars}>
                <FaTimes onClick={showSidebar}/>
                </button>
              </li>
              {SideBarData.map((item,index) => {
                return (
                  <li key={index} className={styles.navText}>
                    <Link key={index} href={item.path}><button>{item.title}</button></Link>
                  </li>
                )
              })}
              <li className={styles.navText}>
                <a href="https://www.instagram.com/levirlms/"><FaInstagram/></a>
                <a href="https://www.facebook.com/levir.lemos/"><FaFacebook/></a>
                <a href="https://www.youtube.com/channel/UCWE4KnYvGHVtJ2oWfZCSocA"><FaYoutube/></a>
                <a href="https://wa.me/5585998413146"><FaWhatsapp/></a>
              </li>
            </ul>
          </nav>
        </div>
				
    </>
    
  );
}
