import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';
import styles from './styles.module.scss';
import Link from 'next/link';

export default function Header({children}){
  const currentDate = format(new Date(), 'EEEEEE , d MMMM' ,{
    locale: ptBR,
  });

  return (
    
    <div className={styles.banner}>
      <div className={styles.overlay}></div>
      
      <div className={styles.container}>
      
        <div className={styles.logo}>
          <Link href="/">
            <h2>Levirlemos</h2>
          </Link>
        </div>

        <nav className={styles.desktop}>
          <ul>
            <Link href="/"><li>Inicio</li></Link>
            <Link href="/Podcastr"><li>Podcastr</li></Link>
            <Link href="/Blog"><li>Blog</li></Link>
            <Link href="/Contato"><li>Contato</li></Link>
          </ul>
        </nav>
      </div>

      <div className={styles.index}>
        {children}
      </div>
    </div>
    
  );
}
