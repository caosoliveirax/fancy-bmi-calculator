import { useAppSelector } from '../../store/hooks'
import * as S from './styles'

const ClassificationCard = () => {
  const value = useAppSelector((state) => state.bmi.value)
  const category = useAppSelector((state) => state.bmi.category)

  if (value === null || category === null) return null

  return (
    <S.ClassificationContainer>
      <S.TableTitle id="classification-table-title">Classificações</S.TableTitle>
      <S.Table aria-labelledby="classification-table-title">
        <thead>
          <tr>
            <S.TableHeaderCell scope="col">IMC</S.TableHeaderCell>
            <S.TableHeaderCell scope="col">Categoria</S.TableHeaderCell>
          </tr>
        </thead>
        <tbody>
          <tr>
            <S.TableCell>Abaixo de 18.5</S.TableCell>
            <S.TableCellCategory $category="underWeight">abaixo do peso</S.TableCellCategory>
          </tr>
          <tr>
            <S.TableCell>Entre 18.6 e 24.9</S.TableCell>
            <S.TableCellCategory $category="normal">peso ideal</S.TableCellCategory>
          </tr>
          <tr>
            <S.TableCell>Entre 25 e 29.9</S.TableCell>
            <S.TableCellCategory $category="overWeight">sobrepeso</S.TableCellCategory>
          </tr>
          <tr>
            <S.TableCell>Entre 30 e 34.9</S.TableCell>
            <S.TableCellCategory $category="obesityI">obesidade grau 1</S.TableCellCategory>
          </tr>
          <tr>
            <S.TableCell>Entre 35 e 39.9</S.TableCell>
            <S.TableCellCategory $category="obesityII">obesidade grau 2</S.TableCellCategory>
          </tr>
          <tr>
            <S.TableCell>Acima de 40</S.TableCell>
            <S.TableCellCategory $category="obesityIII">obesidade grau 3</S.TableCellCategory>
          </tr>
        </tbody>
      </S.Table>
      <S.FooterDescription>
        O IMC é apenas um indicador. Sempre consulte um profissional da saúde.
      </S.FooterDescription>
    </S.ClassificationContainer>
  )
}

export default ClassificationCard
