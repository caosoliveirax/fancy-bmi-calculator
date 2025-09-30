import { Provider } from 'react-redux'
import { store } from './store'
import { GlobalStyle } from './styles/global'
import FormCalculator from '@components/FormCalculator'
import ResultCard from '@components/ResultCard'
import ClassificationTable from '@components/ClassificationTable'
import { Container } from '@components/Container/styles'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Container>
        <FormCalculator />
        <ResultCard />
        <ClassificationTable />
      </Container>
    </Provider>
  )
}

export default App
