import { screen } from '@testing-library/react'
import { renderWithProviders } from '@utils/test-utils'
import Footer from '.'

describe('Deve testar o componente Footer', () => {
  it('Deve renderizar os links sociais e o copyright corretamente', () => {
    renderWithProviders(<Footer isHiddenOnResult={false} />)

    const currentYear = new Date().getFullYear()

    expect(
      screen.getByText(new RegExp(`© ${currentYear} Desenvolvido por Carlos Oliveira`, 'i'))
    ).toBeInTheDocument()
    expect(screen.getByLabelText('Voltar para o portfólio')).toBeInTheDocument()
    expect(screen.getByLabelText('Visitar repositório no Github')).toBeInTheDocument()
    expect(screen.getByLabelText('Visitar perfil no LinkedIn')).toBeInTheDocument()
  })

  it('Deve conter os atributos de segurança em links externos', () => {
    renderWithProviders(<Footer isHiddenOnResult={false} />)

    const githubLink = screen.getByLabelText('Visitar repositório no Github')
    expect(githubLink).toHaveAttribute('target', '_blank')
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer')
    expect(githubLink).toHaveAttribute(
      'href',
      'https://github.com/caosoliveirax/fancy-bmi-calculator'
    )

    const linkedinLink = screen.getByLabelText('Visitar perfil no LinkedIn')
    expect(linkedinLink).toHaveAttribute('target', '_blank')
    expect(linkedinLink).toHaveAttribute('rel', 'noopener noreferrer')
    expect(linkedinLink).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/carlos-oliveira-044552148/'
    )

    const portfolioLinkPlaceholder = screen.getByLabelText('Voltar para o portfólio')
    expect(portfolioLinkPlaceholder).not.toHaveAttribute('target', '_blank')
    expect(portfolioLinkPlaceholder).not.toHaveAttribute('rel', 'noopener noreferrer')
    expect(portfolioLinkPlaceholder).toHaveAttribute('href', '#')
  })

  it('Deve verificar se aplica display:none quando isHiddenOnResult for true', () => {
    renderWithProviders(<Footer isHiddenOnResult={true} />)

    const footerElement = screen.getByRole('contentinfo', { hidden: true })

    expect(footerElement).toHaveStyle({ display: 'none' })
  })

  it('Deve verificar se está visivel quando isHiddenOnResult for false', () => {
    renderWithProviders(<Footer isHiddenOnResult={false} />)

    const footerElement = screen.getByRole('contentinfo')

    expect(footerElement).not.toHaveStyle({ display: 'none' })
  })
})
