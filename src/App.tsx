import { ThemeProvider } from 'styled-components'
import { Contact } from './components/Contact'
import { Header } from './components/Header'
import { ImagesTents } from './components/ImagesTents'
import { Services } from './components/Services'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <Services />
      <ImagesTents />
      <Contact />
      <GlobalStyle />
    </ThemeProvider>
  )
}