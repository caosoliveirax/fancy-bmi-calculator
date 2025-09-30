import { Provider } from 'react-redux'
import { store } from './store'
import { GlobalStyle } from './styles/global'
import FormCalculator from '@components/FormCalculator'
import ResultCard from '@components/ResultCard'
import ClassificationTable from '@components/ClassificationTable'
import { Container } from '@components/Container/styles'
import { ThemeProvider } from 'styled-components'
import { themes } from './themes/themes'

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={themes.main}>
        <GlobalStyle />
        <Container>
          <FormCalculator />
          <ResultCard />
          <ClassificationTable />
        </Container>
      </ThemeProvider>
    </Provider>
  )
}

export default App
