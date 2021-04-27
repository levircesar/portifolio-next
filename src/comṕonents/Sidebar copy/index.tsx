import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';
import styles from './styles.module.scss';
import Link from 'next/link';

export default function Sidebar(){
  const currentDate = format(new Date(), 'EEEEEE , d MMMM' ,{
    locale: ptBR,
  });

  return (

    <div className={styles.container}>
      <div className={styles.boxImg}>
        <img src="/avatar.jpeg" alt="Levir Lemos"/>
        <h2>Levir Lemos</h2>
        <p>Engenheiro de Computação</p>
      </div>
      
      <div className={styles.box}>
        
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Deleniti harum doloremque voluptatem laborum at quis eaque, 
           reiciendis eum soluta inventore 
          beatae accusantium! In commodi dolorem, ipsa ea esse sequi accusa
          mus?</p>

        
        <Link href="/">
          <button>Voltar</button>
        </Link>
      </div>
    </div>
    
  );
}
