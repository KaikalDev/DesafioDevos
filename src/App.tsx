import { Provider } from 'react-redux'
import Page from './Page'
import { Store } from './services/store'
import GlobalStyles from './styles'
import { ColorsDark, ColorsLight } from './theme'
import { ThemeProvider } from 'styled-components'
import { useState } from 'react'

function App() {
  const [isDark, setIsDark] = useState(true)

  return (
    <Provider store={Store}>
      <ThemeProvider theme={isDark ? ColorsDark : ColorsLight}>
        <GlobalStyles />
        <Page toggleTheme={() => setIsDark(!isDark)} isDark={isDark} />
      </ThemeProvider>
    </Provider>
  )
}

export default App
