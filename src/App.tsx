import { Provider } from 'react-redux'
import { store } from './store'
import { GlobalStyle } from './styles/global'
import { ThemeProvider } from 'styled-components'
import { themes } from './themes/themes'
import { Container } from '@components/Container/styles'
import CalculatorCard from '@components/CalculatorCard'
import ResultCard from '@components/ResultCard'
import ClassificationCard from '@components/ClassificationCard'

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={themes.normal}>
        <GlobalStyle />
        <Container>
          <CalculatorCard />
          <ResultCard />
          <ClassificationCard />
        </Container>
      </ThemeProvider>
    </Provider>
  )
}

export default App
