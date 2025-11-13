import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import themeReducer from '../../store/reducers/theme'
import bmiReducer from '../../store/reducers/bmi'
import { themes } from '../../themes/themes'
import ResultCard from '.'
import type { RootState } from 'store'

const createTestStore = (initialBmiState: RootState['bmi'] = { value: null, category: null }) => {
  return configureStore({
    reducer: {
      bmi: bmiReducer,
      theme: themeReducer
    },
    preloadedState: {
      bmi: initialBmiState,
      theme: { theme: themes.main }
    }
  })
}

describe('Deve testar o componente ResultCard', () => {
  it('Não deve renderizar nada se o valor do IMC for null', () => {
    const store = createTestStore({ value: null, category: null })

    const { container } = render(
      <Provider store={store}>
        <ThemeProvider theme={themes.main}>
          <ResultCard />
        </ThemeProvider>
      </Provider>
    )

    expect(container).toBeEmptyDOMElement()
  })

  const scenarios = [
    { category: 'Abaixo do peso', expectedSnippet: 'abaixo do peso ideal' },
    { category: 'Normal', expectedSnippet: 'Parabéns' },
    { category: 'Sobrepeso', expectedSnippet: 'pouco acima do peso' },
    { category: 'Obesidade grau 1', expectedSnippet: 'Cuidado' },
    { category: 'Obesidade grau 2', expectedSnippet: 'Atenção' },
    { category: 'Obesidade grau 3', expectedSnippet: 'Risco elevado' }
  ]

  test.each(scenarios)(
    'Deve exibir a mensagem correta para a categoria $category',
    ({ category, expectedSnippet }) => {
      const store = createTestStore({ value: 20.76, category })

      render(
        <Provider store={store}>
          <ThemeProvider theme={themes.main}>
            <ResultCard />
          </ThemeProvider>
        </Provider>
      )

      expect(screen.getByText(category)).toBeInTheDocument()
      expect(screen.getByText(new RegExp(expectedSnippet, 'i'))).toBeInTheDocument()
    }
  )

  it('Deve retornar a mensagem padrão (vazia) para uma categoria inexistente (caso default)', () => {
    const store = createTestStore({ value: 20.76, category: 'Desconhecida' })

    render(
      <Provider store={store}>
        <ThemeProvider theme={themes.main}>
          <ResultCard />
        </ThemeProvider>
      </Provider>
    )

    const messageElement = screen.queryByText(/Você está|Parabéns|Cuidado|Atenção|Risco/)

    expect(screen.getByText('Desconhecida')).toBeInTheDocument()
    expect(messageElement).not.toBeInTheDocument()
  })
})
