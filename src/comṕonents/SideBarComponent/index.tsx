import React, { useState, useContext, useEffect } from 'react';
import { 
  Container,
  Button,
  Overlay, 
  Desktop, 
  BoxImg, 
  Mobile, 
  Social, 
  Navigation,
  Content ,
  NavBar,
  NavMenu
} from './NewSideBar';
import Link from 'next/link';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';

import { 
  FaBars ,
  FaFacebook,
  FaInstagram,
  FaTimes,
  FaWhatsapp,
  FaYoutube,
  FaMoon,
  FaSun ,
  FaGithub
} from 'react-icons/fa';

import {SideBarData} from '../../utils/SideBarData';
import styles from './styles.module.scss';

interface Props{
  toggleTheme?(): void
}

const SideBarComponent: React.FC<Props> = ({ toggleTheme }) => {
  const [sidebar , setSidebar] = useState(false);
  const [currentAge, setcurrentAge] = useState(0);
  const { colors, title } = useContext(ThemeContext);

  const showSidebar = () => setSidebar(!sidebar);

  useEffect(() => {
    let day1 = Number(new Date().getFullYear()); 
    let day2 = 1999;
    setcurrentAge(day1 - day2);
  },[])
  return (
      <>
        {sidebar && (
          <Overlay onClick={showSidebar} ></Overlay>
        )}

        <Desktop>
          <Container>
            <Content>
            <BoxImg>
              <img src="/avatar.jpeg" alt="Levir Lemos"/>
              <Link href="/">
                <h2>
                  <span>&lt;</span> Levir Lemos <span>/&gt;</span>
                </h2>
              </Link>
              <p>Engenheiro de Computação</p>
            </BoxImg>
            
            <div>
              <p>Estudante do Curso de Engenharia de Computação na Universidade Federal do Ceará,
                apaixonado por tecnologia e desenvolvimento web e mobile XD
              </p>
              <br/>
              <p style={{textAlign:'center'}} >Level {currentAge}</p>
            </div>

            <Social>
                <a href="https://www.instagram.com/levirlms/"><FaInstagram/></a>
                <a href="https://www.facebook.com/levir.lemos/"><FaFacebook/></a>
                <a href="https://wa.me/5585998413146"><FaWhatsapp/></a>
                <a href="https://github.com/levircesar"><FaGithub/></a>
            </Social>

            <Navigation >
              {SideBarData.map((item,index) => {
                return (
                  <Link key={index} href={item.path}><Button>{item.title}</Button></Link>
                )
              })}
            </Navigation>
            <div style={{display: 'flex'}}>
            <Switch
                  onChange={toggleTheme}
                  checked={title === 'light'}
                  checkedIcon={false}
                  uncheckedIcon={false}
                  height={10}
                  width={40}
                  handleDiameter={20}
                  offColor={colors.text}
                  onColor={colors.backgroundSecondary}
                />
            </div>
            </Content>
          </Container>
        </Desktop>


        <Mobile>
          <NavBar>
            <div className={styles.boxImg}>
              <Link href="/">
                <h2>
                  <span>&lt;</span> Levir Lemos <span>/&gt;</span>
                </h2>
              </Link>
            </div>
            <button className={styles.menuBars}>
              {title === 'light'? <FaSun onClick={toggleTheme} />  : <FaMoon onClick={toggleTheme}/>}
               <Switch
                  onChange={toggleTheme}
                  checked={title === 'light'}
                  checkedIcon={false}
                  uncheckedIcon={false}
                  height={10}
                  width={40}
                  handleDiameter={20}
                  offColor={colors.text}
                  onColor={colors.backgroundSecondary}
                />
              <FaBars style={{marginLeft:'20px'}} onClick={showSidebar}/>
            </button>
          </NavBar> 
          <NavMenu>
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
                    <Link key={index} href={item.path}><Button onClick={showSidebar}>{item.title}</Button></Link>
                  </li>
                )
              })}
              <li className={styles.navText}>
                <a href="https://www.instagram.com/levirlms/"><FaInstagram/></a>
                <a href="https://www.facebook.com/levir.lemos/"><FaFacebook/></a>
                <a href="https://wa.me/5585998413146"><FaWhatsapp/></a>
                <a href="https://github.com/levircesar"><FaGithub/></a>
                
              </li>
            </ul>
          </nav>
          </NavMenu>
        </Mobile>
       
    </>
    
  );
}


export default SideBarComponent
