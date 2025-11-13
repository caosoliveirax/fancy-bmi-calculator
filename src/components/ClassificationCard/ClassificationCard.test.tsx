import { screen } from '@testing-library/react'
import { renderWithProviders } from '@utils/test-utils'
import ClassificationCard from '.'

describe('Deve testar o componente ClassificationCard', () => {
  it('Não deve renderizar nada quando não houver resultados calculados (estado inicial)', () => {
    const { container } = renderWithProviders(<ClassificationCard />, {
      preloadedState: {
        bmi: { value: null, category: null }
      }
    })

    expect(container).toBeEmptyDOMElement()
  })

  it('Deve renderizar a tabela com a semântica correta quando houver dados', () => {
    renderWithProviders(<ClassificationCard />, {
      preloadedState: {
        bmi: { value: 20.76, category: 'Normal' }
      }
    })

    const table = screen.getByRole('table')
    expect(table).toBeInTheDocument()
    expect(table).toHaveAttribute('aria-labelledby', 'classification-table-title')

    const title = screen.getByText('Classificações')
    expect(title).toHaveAttribute('id', 'classification-table-title')

    const headers = screen.getAllByRole('columnheader')
    expect(headers).toHaveLength(2)

    headers.forEach((header) => {
      expect(header).toHaveAttribute('scope', 'col')
    })
  })
})
