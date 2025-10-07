import { useState } from 'react'
import { calculateBMI } from '@utils/calculateBMI'
import { getBMICategory } from '@utils/getBMICategory'
import { useAppDispatch } from '../../store/hooks'
import { setResult } from '../../store/reducers/bmiSlice'
import * as S from './styles'
import { getThemeNameByCategory } from '../../utils/getThemeNameByCategory'
import { setTheme } from '../../store/reducers/themeSlice'

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
    const themeName = getThemeNameByCategory(category)

    dispatch(setResult({ value: bmi, category }))
    dispatch(setTheme(themeName))
  }

  return (
    <S.AnimatedCardContainer>
      <S.MainTitle>Calculadora de IMC</S.MainTitle>
      <S.MainDescription>
        Preencha os campos abaixo para calcular o seu Índice de Massa Corporal
      </S.MainDescription>
      <S.FormCalculator onSubmit={handleSubmit}>
        <S.FormLabel htmlFor="height">Altura (cm)</S.FormLabel>
        <S.FormInput
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          id="height"
          type="number"
          placeholder="ex: 170"
          required
        />
        <S.FormLabel htmlFor="weight">Peso (kg)</S.FormLabel>
        <S.FormInput
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          id="weight"
          type="number"
          placeholder="ex: 60"
          required
        />
        <S.FormButton type="submit">Calcular</S.FormButton>
      </S.FormCalculator>
    </S.AnimatedCardContainer>
  )
}

export default CalculatorCard
