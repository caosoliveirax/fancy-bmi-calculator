import { calculateBMI } from './calculateBMI'

describe('Testando o cálculo do IMC', () => {
  it('Deve calcular o IMC corretamente, caso que se arredonda para cima', () => {
    const weight = 60
    const height = 1.7
    const result = calculateBMI(weight, height)

    expect(result).toBe(20.76)
  })

  it('Deve calcular o IMC corretamente, caso que se arredonda para baixo', () => {
    const weight = 80
    const height = 1.8
    const result = calculateBMI(weight, height)

    expect(result).toBe(24.69)
  })
})
