import { useState } from 'react'
import { calculateBMI } from '@utils/calculateBMI'
import { getBMICategory } from '@utils/getBMICategory'
import { useAppDispatch } from '../../store/hooks'
import { setResult } from '../../store/bmiSlice'

const FormCalculator = () => {
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')

  const dispatch = useAppDispatch()

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    const h = parseFloat(height) / 100
    const w = parseFloat(weight)

    const bmi = calculateBMI(w, h)
    const category = getBMICategory(bmi)

    dispatch(setResult({ value: bmi, category }))
  }

  return (
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
    </div>
  )
}

export default FormCalculator
