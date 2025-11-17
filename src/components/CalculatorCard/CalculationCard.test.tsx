import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithProviders, setupStore } from '@utils/test-utils'
import CalculatorCard from '.'
import { themes } from 'themes/themes'

describe('Deve testar a integração do componente CalculatorCard', async () => {
  it('Deve exibir as mensagens de erro se os inputs forem inválidos', async () => {
    const user = userEvent.setup()
    renderWithProviders(<CalculatorCard />)

    const submitButton = screen.getByRole('button', { name: /Calcular/i })

    await user.click(submitButton)

    const alertMessages = screen.getAllByRole('alert')

    expect(alertMessages).toHaveLength(2)
    expect(alertMessages[0]).toHaveTextContent('Altura inválida!')
    expect(alertMessages[1]).toHaveTextContent('Peso inválido!')
  })

  describe('Quando o formulário é preenchido e submetido corretamente', () => {
    let store: ReturnType<typeof setupStore>
    let user: ReturnType<typeof userEvent.setup>

    beforeEach(async () => {
      user = userEvent.setup()
      const { store: renderedStore } = renderWithProviders(<CalculatorCard />)
      store = renderedStore

      const inputHeight = screen.getByLabelText('Altura (cm)')
      const inputWeight = screen.getByLabelText('Peso (kg)')
      const submitButton = screen.getByRole('button', { name: /Calcular/i })

      await user.type(inputHeight, '170')
      await user.type(inputWeight, '60')
      await user.click(submitButton)
    })

    it('Deve verificar se Redux foi atualizado e mostrar a tela de reset', async () => {
      expect(screen.queryByRole('button', { name: /Calcular/i })).not.toBeInTheDocument()
      expect(screen.getByLabelText('Retornar a calculadora')).toBeInTheDocument()

      const state = store.getState()
      expect(state.bmi.value).toBe(20.76)
      expect(state.bmi.category).toBe('Normal')
      expect(state.theme.theme).toEqual(themes.normal)
    })

    it('Deve retornar ao formulário ao clicar no botão de reset', async () => {
      const resetButton = screen.getByLabelText('Retornar a calculadora')
      await user.click(resetButton)

      expect(resetButton).not.toBeInTheDocument()
      expect(screen.getByRole('button', { name: /Calcular/i })).toBeInTheDocument()

      const state = store.getState()
      expect(state.bmi.value).toBeNull()
      expect(state.bmi.category).toBeNull()
    })
  })
})
