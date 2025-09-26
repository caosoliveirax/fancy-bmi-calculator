export function getBMICategory(bmi: number): string {
  if (bmi < 18.5) {
    return 'Abaixo do peso'
  } else if (bmi <= 24.9) {
    return 'Normal'
  } else if (bmi <= 29.9) {
    return 'Sobrepeso'
  } else if (bmi <= 34.9) {
    return 'Obesidade grau I'
  } else if (bmi <= 39.9) {
    return 'Obesidade grau II'
  } else {
    return 'Obesidade grau III'
  }
}
