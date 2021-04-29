import React, { useState } from 'react';
import styles from  './Navbar.module.css';

import { 
  FaBars ,
  FaTimes
} from 'react-icons/fa';

import {SideBarData} from '../../utils/SideBarData';


export default function Github(){
  const [sidebar , setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
      <>
        <div className={styles.navbar}>
          <a href='#' className={styles.menuBars}>
            <FaBars onClick={showSidebar}/>
          </a>
        </div> 

				<nav className={sidebar? `${styles.navMenu} ${styles.active}`:styles.navMenu}>
					<ul className={styles.navMenuItems} >
            <li className={styles.navBarToogle}>
              <a href='#' className={styles.menuBars}>
               <FaTimes onClick={showSidebar}/>
              </a>
            </li>
            {SideBarData.map((item,index) => {
              return (
                <li key={index} className={styles.navText}>
                  <a href={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </a>
                </li>
              )
            })}
					</ul>
				</nav>
    </>
    
  );
}
