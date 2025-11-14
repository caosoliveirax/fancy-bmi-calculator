import { screen } from '@testing-library/react'
import { renderWithProviders } from '@utils/test-utils'
import CalculationForm from './CalculationForm'

const defaultProps = {
  onSubmit: vi.fn(),
  height: '',
  weight: '',
  setHeight: vi.fn(),
  setWeight: vi.fn(),
  errorHeight: null,
  errorWeight: null
}

describe('Deve testar o componente CalculationForm', () => {
  it('Deve renderizar inputs e botão "Calcular"', () => {
    renderWithProviders(<CalculationForm {...defaultProps} />)

    expect(screen.getByLabelText('Altura (cm)'))
    expect(screen.getByLabelText('Peso (kg)'))
    expect(screen.getByRole('button', { name: /Calcular/i })).toBeInTheDocument()
  })

  it('Deve exibir a mensagem de erro da altura quando a prop for passada', () => {
    renderWithProviders(<CalculationForm {...defaultProps} errorHeight="Altura inválida!" />)

    const alertMessage = screen.getByRole('alert')

    expect(alertMessage).toBeInTheDocument()
    expect(alertMessage).toHaveTextContent('Altura inválida!')
  })

  it('Deve exibir a mensagem de erro do peso quando a prop for passada', () => {
    renderWithProviders(<CalculationForm {...defaultProps} errorWeight="Peso inválido!" />)

    const alertMessage = screen.getByRole('alert')

    expect(alertMessage).toBeInTheDocument()
    expect(alertMessage).toHaveTextContent('Peso inválido!')
  })

  it('Deve exibir ambas as mensagens de erro se ambas forem passadas', () => {
    renderWithProviders(
      <CalculationForm
        {...defaultProps}
        errorWeight="Peso inválido!"
        errorHeight="Altura inválida!"
      />
    )

    const alertMessages = screen.getAllByRole('alert')

    expect(alertMessages).toHaveLength(2)
    expect(alertMessages[0]).toHaveTextContent('Altura inválida!')
    expect(alertMessages[1]).toHaveTextContent('Peso inválido!')
  })
})
