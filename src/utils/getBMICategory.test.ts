import { getBMICategory } from './getBMICategory'

describe('Testando o retorno de categorias IMC', () => {
  it('Deve retornar a categoria "Abaixo do peso" no limite (18.4)', () => {
    const bmi = 18.4
    const category = getBMICategory(bmi)

    expect(category).toBe('Abaixo do peso')
  })

  it('Deve retornar a categoria "Normal" no limite inferior (18.5)', () => {
    const bmi = 18.5
    const category = getBMICategory(bmi)

    expect(category).toBe('Normal')
  })

  it('Deve retornar a categoria "Normal" no limite superior (24.9)', () => {
    const bmi = 24.9
    const category = getBMICategory(bmi)

    expect(category).toBe('Normal')
  })

  it('Deve retornar a categoria "Sobrepeso" no limite inferior (25.0)', () => {
    const bmi = 25.0
    const category = getBMICategory(bmi)

    expect(category).toBe('Sobrepeso')
  })

  it('Deve retornar a categoria "Sobrepeso" no limite superior (29.9)', () => {
    const bmi = 29.9
    const category = getBMICategory(bmi)

    expect(category).toBe('Sobrepeso')
  })

  it('Deve retornar a categoria "Obesidade grau 1" no limite inferior (30.0)', () => {
    const bmi = 30.0
    const category = getBMICategory(bmi)

    expect(category).toBe('Obesidade grau 1')
  })

  it('Deve retornar a categoria "Obesidade grau 1" no limite superior (34.9)', () => {
    const bmi = 34.9
    const category = getBMICategory(bmi)

    expect(category).toBe('Obesidade grau 1')
  })

  it('Deve retornar a categoria "Obesidade grau 2" no limite inferior (35.0)', () => {
    const bmi = 35.0
    const category = getBMICategory(bmi)

    expect(category).toBe('Obesidade grau 2')
  })

  it('Deve retornar a categoria "Obesidade grau 2" no limite superior (39.9)', () => {
    const bmi = 39.9
    const category = getBMICategory(bmi)

    expect(category).toBe('Obesidade grau 2')
  })

  it('Deve retornar a categoria "Obesidade grau 3" no limite (40.0)', () => {
    const bmi = 40.0
    const category = getBMICategory(bmi)

    expect(category).toBe('Obesidade grau 3')
  })
})
