import React , {useState, useEffect} from 'react';
import Head from 'next/head';
import styles from '../styles/profile.module.scss';
import { Cantadas } from '../utils/Cantadas';
import { Assuntos } from '../utils/Assuntos';
import { FaCheck, FaCopy } from 'react-icons/fa';

export default function Profile(){

  const [copy, setCopy] = useState(false);
  const [copyAssunto, setCopyAssunto] = useState(false);
  const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random()*Cantadas.length));
  const [randomNumberAssunto, setRandomNumberAssunto] = useState(Math.floor(Math.random()*Assuntos.length));
  const [card , setCard] = useState({area:'',frase:''});
  const [assunto , setAssunto] = useState({area:'',frase:''});
 
  
  function Copiar(text){
    setCopy(!copy);
    navigator.clipboard.writeText(`${text}`);
  }

  function desCopiar(){
    setCopy(false)
  }

  function CopiarAssunto(text){
    setCopyAssunto(!copyAssunto);
    navigator.clipboard.writeText(`${text}`);
  }

  function desCopiarAssunto(){
    setCopyAssunto(false)
  }

  function randomItem(items){
    setRandomNumber(Math.floor(Math.random()*items.length));   
    const result = items.find((element,index) => index === randomNumber);
    setCard({area: result.area , frase: result.frase})
  }

  function randomAssunto(items){
    const random = Math.floor(Math.random()*items.length);
    setRandomNumberAssunto(random);   
    const result = items.find((element,index) => index === randomNumberAssunto);
    setAssunto({area: result.are , frase: result.frase})
  }

  return (
        <div className={styles.wrapper}>
        <Head>
          <title>Cantadas</title>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </Head>

        <main>     
          <div className={styles.content}>
            <section style={{marginBottom:'10px'}}>
              <h2>
                Gerador de Cantadas aleatórias
              </h2>
              
              <div style={{width: '100%' , height: '200px'}}>
                {card.frase==='' ? <p>Clique em obter cantada</p> : <p> {card.frase}</p>}
              </div>
              <button style={{width: '150px' , height: '60px', marginRight: '10px'}} onClick={()=>randomItem(Cantadas)}>obter cantada</button>
              {copy
              ? (<button  style={{width: '150px' , height: '60px'}} onMouseLeave={()=>desCopiar()} onMouseDown={()=>Copiar(card.frase)}>
                  <FaCheck/> Copiado
                </button> )
              : (<button  style={{width: '150px' , height: '60px'}}onMouseLeave={()=>desCopiar()} onMouseDown={()=>Copiar(card.frase)}>
                  <FaCopy/> Copiar
              </button>)}
            </section>

            <section style={{marginBottom:'10px'}}>
              <h2>
                Gerador de Assuntos para começar conversa aleatório
              </h2>
              
              <div style={{width: '100%' , height: '200px'}}>
                {assunto.frase==='' ? <p>Clique em obter assunto</p> : <p> {assunto.frase}</p>}
              </div>
              <button style={{width: '150px' , height: '60px', marginRight: '10px'}} onClick={()=>randomAssunto(Assuntos)}>obter assunto</button>
              {copyAssunto
              ? (<button  style={{width: '150px' , height: '60px'}} onMouseLeave={()=>desCopiarAssunto()} onMouseDown={()=>CopiarAssunto(assunto.frase)}>
                  <FaCheck/> Copiado
                </button> )
              : (<button  style={{width: '150px' , height: '60px'}}onMouseLeave={()=>desCopiarAssunto()} onMouseDown={()=>CopiarAssunto(assunto.frase)}>
                  <FaCopy/> Copiar
              </button>)}
            </section>     
            <h2 style={{margin:'10px',textAlign:'center'}}>Curtiu o app? Que tal apoiar esse projeto :p</h2>

            <form style={{textAlign:'center'}} action="https://www.paypal.com/donate" method="post" target="_top">
              <input type="hidden" name="hosted_button_id" value="ZQR9J5LBZAMLN" />
              <input type="image" src="https://www.paypalobjects.com/pt_BR/BR/i/btn/btn_donateCC_LG.gif" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
              <img alt="" src="https://www.paypal.com/pt_BR/i/scr/pixel.gif" width="1" height="1" />
            </form>    
          </div>

          
         
        </main>
      </div>
  )
}

