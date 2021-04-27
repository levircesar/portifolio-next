import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';
import styles from './styles.module.scss';
import Link from 'next/link';

interface GithubProps{
  name:string;
  url:string;
  description:string;

}

export default function Github({name,url,description} :GithubProps){
  const currentDate = format(new Date(), 'EEEEEE , d MMMM' ,{
    locale: ptBR,
  });

  return (

    <div className={styles.container}>
        <a href={url}><li>{name}</li></a>
        <p>{description}</p>
    </div>
    
  );
}
