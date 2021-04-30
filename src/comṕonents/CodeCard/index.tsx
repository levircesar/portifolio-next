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
    navigator.clipboard.writeText(`${text}`);
  }

  function desCopiar(){
    setCopy(false)
  }


  return (
    <div className={styles.container}>
      <pre>
        <code>
          <p>{text}</p>
          
          {copy
          ? (<button onMouseLeave={()=>desCopiar()} onMouseDown={()=>Copiar(text)}>
              <FaCheck/> Copiado
            </button> )
          : (<button onMouseLeave={()=>desCopiar()} onMouseDown={()=>Copiar(text)}>
              <FaCopy/> Copiar
            </button> )}
        </code>
      </pre>
    </div>
    
    
  );
}
