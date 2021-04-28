import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';
import styles from './styles.module.scss';
import Link from 'next/link';
import { FaInstagram , FaFacebook , FaWhatsapp , FaYoutube} from 'react-icons/fa';

export default function Sidebar(){
  const currentDate = format(new Date(), 'EEEEEE , d MMMM' ,{
    locale: ptBR,
  });

  return (

    
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

      <div>
        <Link href="/"><button>Home</button></Link>
        <Link href="/panel"><button>Painel</button></Link>
        <Link href="/404"><button>Error</button></Link>
      </div>
      
      
    </div>
    
  );
}
