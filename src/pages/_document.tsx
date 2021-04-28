import Document , {Html, Head, Main, NextScript} from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Inter&family=Lexend:wght@500;600&display=swap" rel="stylesheet"/>
          <link rel="shortcut icon" href="/favicon.png" type="image/png" />
          <meta http-equiv="X-UA-Compatible" content="IE=Edge"/>
          <meta name="author" content="Levir César Ribeiro Lemos"/>
          <meta name="description" content="Levir Lemos | Website" />
          <meta name="keywords" content="levir cesar, levir lemos, engenheiro de computação,desenvolvimento web,seo,marketing digital,programação,web design,front-end,web developer,back-end,php" />
          <meta name="robots" content="index,follow"/>
          <meta name="theme-color" content="#483079"/> 
          <meta name="format-detection" content="telephone=no"/>
          <meta property="og:title" content="Levir Lemos | Website"/>
          <meta property="og:site_name" content="Levir Lemos"/>
          <meta property="og:description" content="Levir Lemos | Website"/>
          <meta property="og:url" content="https://portifolio-next-omega.vercel.app/"/>
          <meta property="og:image" content="https://portifolio-next-omega.vercel.app/favicon.png"/>
          <meta property="og:image:type" content="image/png"/>

        </Head>
        <body>
          <Main/>
          <NextScript/>
        </body>
      </Html>
    );
  }
}