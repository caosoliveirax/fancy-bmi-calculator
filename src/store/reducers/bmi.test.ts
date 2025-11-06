import bmiReducer, { resetResult, setResult } from './bmi'

const initialState = {
  value: null,
  category: null
}

describe('Testando o slice do IMC', () => {
  it('Deve retornar o estado inicial ao ser chamado com uma ação desconhecida', () => {
    const unknownAction = { type: '@@UNKNOWN_ACTION' }
    const newState = bmiReducer(undefined, unknownAction)

    expect(newState).toEqual(initialState)
  })

  it('Deve atualizar o estado corretamente ao usar a action setResult', () => {
    const testPayload = { value: 25.5, category: 'Sobrepeso' }

    const action = setResult(testPayload)
    const newState = bmiReducer(initialState, action)

    expect(newState).toEqual(testPayload)
  })

  it('Deve retornar ao estado inicial ao usar a action resetResult', () => {
    const testPayload = { value: 25.5, category: 'Sobrepeso' }

    const action = resetResult()
    const newState = bmiReducer(testPayload, action)

    expect(newState).toEqual(initialState)
  })
})
