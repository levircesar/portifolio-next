import React, { useState } from 'react';
import styles from  './styles.module.scss';
import { FaCopy ,FaCheck} from 'react-icons/fa';

interface CodeProps {
  text: string;
}

export default function Codecard({text}:CodeProps){
  const [copy, setCopy] = useState(false);
 
  function Copiar(text){
    setCopy(!copy);
    console.log(copy);
    navigator.clipboard.writeText(`${text}`);
    setTimeout(() => {
      setCopy(false);
    }, 10000);
  }


  return (
    <div className={styles.container}>
      <pre>
        <code>
          <p>{text}</p>
          
          {copy
          ? (<button onClick={()=>Copiar(text)}>
              <FaCheck/> Copiado
            </button> )
          : (<button onClick={()=>Copiar(text)}>
              <FaCopy/> Copiar
            </button> )}
        </code>
      </pre>
    </div>
    
    
  );
}
