import type { BMICategory } from '../themes/themes'

export function getThemeNameByCategory(category: string): BMICategory {
  switch (category) {
    case 'Abaixo do peso':
      return 'underWeight'
    case 'Normal':
      return 'normal'
    case 'Sobrepeso':
      return 'overWeight'
    case 'Obesidade grau I':
      return 'obesityI'
    case 'Obesidade grau II':
      return 'obesityII'
    case 'Obesidade grau III':
      return 'obesityIII'
    default:
      return 'normal'
  }
}
