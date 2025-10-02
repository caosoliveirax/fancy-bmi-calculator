import { useState } from 'react'
import { calculateBMI } from '@utils/calculateBMI'
import { getBMICategory } from '@utils/getBMICategory'
import { useAppDispatch } from '../../store/hooks'
import { setResult } from '../../store/bmiSlice'
import { CardContainer } from '@components/Container/styles'
import {
  MainDescription,
  MainTitle,
  FormCalculator,
  FormLabel,
  FormInput,
  FormButton
} from './styles'

const CalculatorCard = () => {
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
    <CardContainer>
      <MainTitle>Calculadora de IMC</MainTitle>
      <MainDescription>
        Preencha os campos abaixo para calcular o seu Índice de Massa Corporal
      </MainDescription>
      <FormCalculator onSubmit={handleSubmit}>
        <FormLabel htmlFor="height">Altura (cm)</FormLabel>
        <FormInput
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          id="height"
          type="number"
          placeholder="ex: 170"
          required
        />
        <FormLabel htmlFor="weight">Peso (kg)</FormLabel>
        <FormInput
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          id="weight"
          type="number"
          placeholder="ex: 60"
          required
        />
        <FormButton type="submit">Calcular</FormButton>
      </FormCalculator>
    </CardContainer>
  )
}

export default CalculatorCard
