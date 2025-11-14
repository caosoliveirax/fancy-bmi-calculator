import { renderWithProviders } from '@utils/test-utils'
import LiveRegion from '.'
import { resetResult, setResult } from 'store/reducers/bmi'
import { act } from 'react'

describe('Deve testar o componente LiveRegion', () => {
  it('Deve iniciar o componente com o texto vazio', () => {
    const { container } = renderWithProviders(<LiveRegion />, {
      preloadedState: {
        bmi: { value: null, category: null }
      }
    })

    expect(container).toHaveTextContent('')
  })

  it('Deve anunciar o resultado quando o estado mudar e limpar ao resetar', () => {
    const { container, store } = renderWithProviders(<LiveRegion />, {
      preloadedState: {
        bmi: { value: null, category: null }
      }
    })

    expect(container).toHaveTextContent('')

    act(() => {
      store.dispatch(setResult({ value: 20.76, category: 'Normal' }))
    })

    expect(container).toHaveTextContent('Seu IMC é de 20.76')
    expect(container).toHaveTextContent('Categoria: Normal')
    expect(container).toHaveTextContent(
      'Parabéns! Você está com o peso ideal. Mantenha uma alimentação equilibrada e pratique exercícios regularmente.'
    )

    act(() => {
      store.dispatch(resetResult())
    })

    expect(container).toHaveTextContent('')
  })
})
