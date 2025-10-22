import { Provider } from 'react-redux'
import { store } from './store'
import { GlobalStyle } from './styles/global'
import { ThemeProvider } from 'styled-components'
import { Container } from '@components/Container/styles'
import CalculatorCard from '@components/CalculatorCard'
import ResultCard from '@components/ResultCard'
import ClassificationCard from '@components/ClassificationCard'
import { useAppSelector } from './store/hooks'

function AppContent() {
  const theme = useAppSelector((state) => state.theme.theme)
  const isResultVisible = useAppSelector((state) => state.bmi.value !== null)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container $isResultVisible={isResultVisible}>
        <CalculatorCard />
        <ResultCard />
        <ClassificationCard />
      </Container>
    </ThemeProvider>
  )
}

function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  )
}

export default App
