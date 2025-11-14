import { getMessage } from './getBMIMessage'

describe('Deve testar o utilitário getBMIMessage', () => {
  const scenarios = [
    { category: 'Abaixo do peso', expectedSnippet: 'abaixo do peso ideal' },
    { category: 'Normal', expectedSnippet: 'Parabéns' },
    { category: 'Sobrepeso', expectedSnippet: 'pouco acima do peso' },
    { category: 'Obesidade grau 1', expectedSnippet: 'Cuidado' },
    { category: 'Obesidade grau 2', expectedSnippet: 'Atenção' },
    { category: 'Obesidade grau 3', expectedSnippet: 'Risco elevado' }
  ]

  test.each(scenarios)(
    'Deve retornar a mensagem correta para a categoria $category',
    ({ category, expectedSnippet }) => {
      const message = getMessage(category)
      expect(message).toContain(expectedSnippet)
    }
  )

  it('Deve retornar uma string vazia (default) para uma categoria desconhecida', () => {
    const message = getMessage('Desconhecida')
    expect(message).toBe('')
  })
})
