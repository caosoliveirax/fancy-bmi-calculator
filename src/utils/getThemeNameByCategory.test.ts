import { getThemeNameByCategory } from './getThemeNameByCategory'

describe('Testando o retorno das chaves de temas', () => {
  const testCases = [
    { category: 'Abaixo do peso', expected: 'underWeight' },
    { category: 'Normal', expected: 'normal' },
    { category: 'Sobrepeso', expected: 'overWeight' },
    { category: 'Obesidade grau 1', expected: 'obesityI' },
    { category: 'Obesidade grau 2', expected: 'obesityII' },
    { category: 'Obesidade grau 3', expected: 'obesityIII' }
  ]

  test.each(testCases)(
    'Deve retornar a chave $expected para a categoria $category',
    ({ category, expected }) => {
      expect(getThemeNameByCategory(category)).toBe(expected)
    }
  )

  it('Deve retornar a chave "default', () => {
    expect(getThemeNameByCategory('default')).toBe('normal')
  })
})
