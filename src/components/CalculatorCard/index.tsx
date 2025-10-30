import { useState, useEffect, useRef } from 'react'
import { calculateBMI } from '@utils/calculateBMI'
import { getBMICategory } from '@utils/getBMICategory'
import { useAppDispatch } from '../../store/hooks'
import { setResult, resetResult } from '../../store/reducers/bmi'
import { getThemeNameByCategory } from '../../utils/getThemeNameByCategory'
import { setTheme } from '../../store/reducers/theme'
import CalculationForm from './CalculationForm'
import ResetView from './ResetView'

const CalculatorCard = () => {
  const [isCalculated, setIsCalculated] = useState(false)
  const [height, setHeight] = useState('')
  const [errorHeight, setErrorHeight] = useState<string | null>(null)
  const [weight, setWeight] = useState('')
  const [errorWeight, setErrorWeight] = useState<string | null>(null)
  const resetButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (isCalculated) {
      const timer = setTimeout(() => {
        resetButtonRef.current?.focus()
      }, 300)

      return () => clearTimeout(timer)
    }
  }, [isCalculated])

  const dispatch = useAppDispatch()

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    setErrorWeight(null)
    setErrorHeight(null)

    let formIsValid = true

    const numericHeight = parseFloat(height)
    const numericWeight = parseFloat(weight)

    if (isNaN(numericHeight) || numericHeight <= 0) {
      setErrorHeight('Altura inválida!')
      formIsValid = false
    }

    if (isNaN(numericWeight) || numericWeight <= 0) {
      setErrorWeight('Peso inválido!')
      formIsValid = false
    }

    if (!formIsValid) {
      return
    }

    const bmi = calculateBMI(numericWeight, numericHeight / 100)
    const category = getBMICategory(bmi)
    const themeName = getThemeNameByCategory(category)

    dispatch(setResult({ value: bmi, category }))
    dispatch(setTheme(themeName))
    setIsCalculated(true)
  }

  const handleReset = () => {
    setIsCalculated(false)
    setWeight('')
    setHeight('')
    dispatch(resetResult())
  }

  return (
    <>
      {isCalculated ? (
        <ResetView ref={resetButtonRef} onReset={handleReset} />
      ) : (
        <CalculationForm
          onSubmit={handleSubmit}
          height={height}
          weight={weight}
          errorHeight={errorHeight}
          errorWeight={errorWeight}
          setHeight={setHeight}
          setWeight={setWeight}
        />
      )}
    </>
  )
}

export default CalculatorCard
