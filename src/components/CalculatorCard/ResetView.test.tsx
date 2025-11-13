import { fireEvent, render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import ResetView from './ResetView'
import { themes } from '../../themes/themes'

describe('Deve testar o componente ResetView', () => {
  it('Deve chamar a função onReset quando o botão for clicado', () => {
    const onResetMock = vi.fn()
    render(
      <ThemeProvider theme={themes.main}>
        <ResetView onReset={onResetMock} />
      </ThemeProvider>
    )

    const button = screen.getByLabelText('Retornar a calculadora')
    fireEvent.click(button)

    expect(onResetMock).toBeCalledTimes(1)
  })
})
