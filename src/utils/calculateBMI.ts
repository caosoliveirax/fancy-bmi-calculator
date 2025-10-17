export function calculateBMI(weight: number, height: number): number {
  const bmi = weight / (height * height)
  return Number(bmi.toFixed(2))
}
