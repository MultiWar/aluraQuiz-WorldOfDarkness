import Router, { AppProps } from 'next/dist/next-server/lib/router/router'
import Head from 'next/head'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import db from '../db.json'
import np from 'nprogress'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* New styles */
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    // Deixa branco no começo
    color: ${({ theme }) => theme.colors.contrastText};
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`

Router.events.on('routeChangeStart', () => np.start())
Router.events.on('routeChangeComplete', () => np.done())
Router.events.on('routeChangeError', () => np.done())

const theme = db.theme


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />
        <link rel='stylesheet' type='text/css' href='/nprogress.css' />
        <meta charSet='UTF-8' />
        <meta name='og:description' content='Este quiz foi feito para testar seus conhecimentos do clássico mundo de RPG "World of Darkness", a qual pertence "Vampire: the Masquerade" e outros.' />
        <meta name='og:image' content='https://static.wikia.nocookie.net/whitewolf/images/3/3c/SymbolWoD5e.png/revision/latest/scale-to-width-down/340?cb=20180729032522' />
        <meta name='og:url' content='https://aluraquiz-world-of-darkness.multiwar.vercel.app/' />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
