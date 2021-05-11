import React,{useState} from 'react';
import '../styles/global.scss';
import { AppProps } from 'next/app'

import { ThemeProvider } from 'styled-components'
import light from '../styles/themes/light'
import dark from '../styles/themes/dark'
import SideBarComponent from '../comṕonents/SideBarComponent';
import GlobalStyle from '../styles/global'
import { Container,WidthTrinta,WidthSetenta } from '../styles/app';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [theme, setTheme] = useState(dark)
  const toggleTheme = () => {
    setTheme(theme.title === 'dark' ? light : dark)
  }
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <WidthTrinta>
          <SideBarComponent  toggleTheme={toggleTheme}/>
        </WidthTrinta>
        <WidthSetenta>
         <Component {...pageProps} />
        </WidthSetenta>
      </Container>
      <GlobalStyle />
    </ThemeProvider>
    
  )
}

export default MyApp

