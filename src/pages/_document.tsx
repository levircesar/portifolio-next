import React from 'react'
import Document, {
  DocumentInitialProps,
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props =>
            // eslint-disable-next-line react/react-in-jsx-scope
            sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          // eslint-disable-next-line react/react-in-jsx-scope
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render(): JSX.Element {
    return (
      <Html lang="pt">
        <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Inter&family=Lexend:wght@500;600&display=swap" rel="stylesheet"/>
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        <meta name="author" content="Levir César Ribeiro Lemos"/>
        <meta name="description" content="Seja muito bem vindo ao meu site pessoal, me chamo Levir Cesar Ribeiro Lemos e sou estudante de engenharia de computação na UFC" />
        <meta name="keywords" content=",levir cesar ribeiro lemos,levir cesar, levir lemos, engenheiro de computação,desenvolvimento web,seo,marketing digital,programação,web design,front-end,web developer,back-end,php" />
        <meta name="robots" content="index,follow"/>
        <meta name="theme-color" content="#483079"/> 
        <meta name="format-detection" content="telephone=no"/>
        <meta property="og:title" content="Levir Lemos | Website"/>
        <meta property="og:site_name" content="Levir Lemos | Website"/>
        <meta property="og:description" content="Seja muito bem vindo ao meu site pessoal, me chamo Levir Cesar Ribeiro Lemos e sou estudante de engenharia de computação na UFC"/>
        <meta property="og:url" content="https://portifolio-next-omega.vercel.app/"/>
        <meta property="og:image" content="https://portifolio-next-omega.vercel.app/favicon.png"/>
        <meta property="og:image:type" content="image/png"/>
        <script src="https://www.paypal.com/sdk/js?client-id=AbK5cCKs_cYJf8yUJn-e1-2nwQaJhoc0FloYddIn8mnOEyRkVOnO89ZZhxsBFIS4X2zHi3T9McYAEz7t&currency=BRL"></script>
        <script data-ad-client="ca-pub-2617114983028479" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
