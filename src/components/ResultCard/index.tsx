import { getMessage } from '@utils/getBMIMessage'
import { useAppSelector } from '../../store/hooks'
import * as S from './styles'

const ResultCard = () => {
  const value = useAppSelector((state) => state.bmi.value)
  const category = useAppSelector((state) => state.bmi.category)

  if (value === null || category === null) return null

  return (
    <S.ResultContainer>
      <S.ResultTitle>Seu IMC é de:</S.ResultTitle>
      <S.ResultValue>{value}</S.ResultValue>
      <S.ResultCategory>{category}</S.ResultCategory>
      <S.ResultMessage>{getMessage(category)}</S.ResultMessage>
    </S.ResultContainer>
  )
}

export default ResultCard
