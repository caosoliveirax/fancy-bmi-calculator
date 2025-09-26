import { useState } from 'react'
import { calculateBMI } from '@utils/calculateBMI'
import { getBMICategory } from '@utils/getBMICategory'
import ResultCard from '@components/ResultCard'

const FormCalculator = () => {
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [bmiResult, setBmiResult] = useState<number | null>(null)
  const [bmiCategory, setBmiCategory] = useState<string | null>(null)

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault()

    const h = parseFloat(height) / 100
    const w = parseFloat(weight)

    const bmi = calculateBMI(w, h)
    setBmiResult(bmi)

    const category = getBMICategory(bmi)
    setBmiCategory(category)
  }

  return (
    <>
      <div>
        <h1>Calculadora de IMC</h1>
        <p>Preencha os campos abaixo para calcular o seu Índice de Massa Corporal</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="height">Altura (cm)</label>
          <input
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            id="height"
            type="number"
            placeholder="ex: 170"
            required
          />
          <label htmlFor="weight">Peso (kg)</label>
          <input
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            id="weight"
            type="number"
            placeholder="ex: 60"
            required
          />
          <button type="submit">Calcular</button>
        </form>
        {bmiResult && bmiCategory && <ResultCard value={bmiResult} category={bmiCategory} />}
      </div>
    </>
  )
}

export default FormCalculator
