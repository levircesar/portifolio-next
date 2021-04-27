adicionar typescript ao projeto next:

```
yarn add typescript @types/react @types/node -D
```

biblioteca para lhe dar com datas 

```
yarn add date-fns
```

para isnerir fonts e elementos no header, criamos o arquivo <i>_document.tsx</i>

se tivermos componentes que devem aparecer em todas as telas, colocamos ele no <i>_app.tsx</i>


Se quiser uma api fake a partir de um arquivo json, utilize o json-server. Adicionamos
o comando "server" no package.json
```
yarn add json-server -D
```

getStaticProps so funciona em producao, para isso execute
```
yarn build e depois yarn start
```

//import de api
//SPA - useEffect (nao indexa no google)
{/*
useEffect(()=>{
    fetch('http://localhost:3333/episodes')
      .then(response => response.json())
      .then(data => console.log(data))
  },[]);
*/}
//SSR - getServerSideProps
//SSG - getStaticProps - so funciona em producao


contexts ficam disponiveis em todos os componentes

para o slider usamos a biblioteca 
```
yarn add rc-slider
```

para manipular elementos dentro de tag no react, ex: audio, passamos uma useRef

features
<ul>
<li>Adicionar responsivo</li>
<li>Adicionar PWA </li>
</ul>