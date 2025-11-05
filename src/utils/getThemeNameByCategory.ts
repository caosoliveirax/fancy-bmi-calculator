import type { BMICategory } from '../themes/themes'

export function getThemeNameByCategory(category: string): BMICategory {
  switch (category) {
    case 'Abaixo do peso':
      return 'underWeight'
    case 'Normal':
      return 'normal'
    case 'Sobrepeso':
      return 'overWeight'
    case 'Obesidade grau 1':
      return 'obesityI'
    case 'Obesidade grau 2':
      return 'obesityII'
    case 'Obesidade grau 3':
      return 'obesityIII'
    default:
      return 'normal'
  }
}
