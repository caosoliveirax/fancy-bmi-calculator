import { screen } from '@testing-library/react'

import ResultCard from '.'

import { renderWithProviders } from '@utils/test-utils'

describe('Deve testar o componente ResultCard', () => {
  it('Não deve renderizar nada quando não houver resultados calculados (estado inicial)', () => {
    const { container } = renderWithProviders(<ResultCard />, {
      preloadedState: {
        bmi: { value: null, category: null }
      }
    })

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
      renderWithProviders(<ResultCard />, {
        preloadedState: {
          bmi: { value: 20.76, category }
        }
      })

      expect(screen.getByText(category)).toBeInTheDocument()
      expect(screen.getByText(new RegExp(expectedSnippet, 'i'))).toBeInTheDocument()
    }
  )

  it('Deve retornar a mensagem padrão (vazia) para uma categoria inexistente (caso default)', () => {
    renderWithProviders(<ResultCard />, {
      preloadedState: {
        bmi: { value: 20.76, category: 'Desconhecida' }
      }
    })

    const messageElement = screen.queryByText(/Você está|Parabéns|Cuidado|Atenção|Risco/)

    expect(screen.getByText('Desconhecida')).toBeInTheDocument()
    expect(messageElement).not.toBeInTheDocument()
  })
})
