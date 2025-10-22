import * as S from './styles'

type Props = {
  onSubmit: (event: React.FormEvent) => void
  height: string
  weight: string
  setHeight: (value: string) => void
  setWeight: (value: string) => void
  errorHeight: string | null
  errorWeight: string | null
}

const CalculationForm = ({
  onSubmit,
  height,
  weight,
  errorHeight,
  errorWeight,
  setHeight,
  setWeight
}: Props) => {
  return (
    <S.CalculatorContainer>
      <S.MainTitle>Calculadora de IMC</S.MainTitle>
      <S.MainDescription>
        Preencha os campos abaixo para calcular o seu Índice de Massa Corporal
      </S.MainDescription>
      <S.FormCalculator onSubmit={onSubmit}>
        <S.FormLabel htmlFor="height">Altura (cm)</S.FormLabel>
        <S.InputContainer>
          <S.FormInput
            value={height}
            onAccept={(value) => setHeight(String(value))}
            id="height"
            type="text"
            placeholder="ex: 170"
            mask={Number}
            maxLength={3}
            scale={0}
          />
          {errorHeight && <S.ErrorMessage>{errorHeight}</S.ErrorMessage>}
        </S.InputContainer>
        <S.FormLabel htmlFor="weight">Peso (kg)</S.FormLabel>
        <S.InputContainer>
          <S.FormInput
            value={weight}
            onAccept={(value) => setWeight(String(value))}
            id="weight"
            type="text"
            placeholder="ex: 60.5"
            mask={Number}
            maxLength={5}
            scale={1}
            radix="."
          />
          {errorWeight && <S.ErrorMessage>{errorWeight}</S.ErrorMessage>}
        </S.InputContainer>
        <S.FormButton type="submit">Calcular</S.FormButton>
      </S.FormCalculator>
    </S.CalculatorContainer>
  )
}

export default CalculationForm
