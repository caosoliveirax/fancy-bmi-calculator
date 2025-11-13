import themeReducer, { setTheme } from './theme'
import { themes, type BMICategory } from '../../themes/themes'

const initialState = {
  theme: themes.main
}

describe('Testando o slice dos Temas', () => {
  it('Deve retornar o estado inicial ao ser chamado com uma ação desconhecida', () => {
    const unknownAction = { type: '@@UNKNOWN_ACTION' }
    const newState = themeReducer(undefined, unknownAction)

    expect(newState).toEqual(initialState)
  })

  const categories: BMICategory[] = [
    'underWeight',
    'normal',
    'overWeight',
    'obesityI',
    'obesityII',
    'obesityIII'
  ]

  test.each(categories)('Deve atualizar o estado corretamente para o tema "%s"', (category) => {
    const action = setTheme(category)
    const newState = themeReducer(initialState, action)
    expect(newState.theme).toEqual(themes[category])
  })
})
