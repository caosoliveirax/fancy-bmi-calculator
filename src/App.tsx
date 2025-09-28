import { Provider } from 'react-redux'
import { store } from './store'
import { GlobalStyle } from './global'
import FormCalculator from '@components/FormCalculator'
import ResultCard from '@components/ResultCard'
import ClassificationTable from '@components/ClassificationTable'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <FormCalculator />
      <ResultCard />
      <ClassificationTable />
    </Provider>
  )
}

export default App
