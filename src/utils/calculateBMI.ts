export function calculateBMI(weight: number, height: number): number {
  if (height <= 0 || weight <= 0) {
    throw new Error('Peso e altura devem ser maiores que zero')
  }

  const bmi = weight / (height * height)
  return Number(bmi.toFixed(2))
}
