import { CardContainer } from '@components/Container/styles'
import { useAppSelector } from '../../store/hooks'
import {
  FooterDescription,
  Table,
  TableCell,
  TableCellCategory,
  TableHeaderCell,
  TableTitle
} from './styles'

const ClassificationCard = () => {
  const value = useAppSelector((state) => state.bmi.value)
  const category = useAppSelector((state) => state.bmi.category)

  if (value === null || category === null) return null

  return (
    <CardContainer>
      <TableTitle>Classificações</TableTitle>
      <Table>
        <thead>
          <tr>
            <TableHeaderCell>IMC</TableHeaderCell>
            <TableHeaderCell>Categoria</TableHeaderCell>
          </tr>
        </thead>
        <tbody>
          <tr>
            <TableCell>Abaixo de 18.5</TableCell>
            <TableCellCategory category="underWeight">abaixo do peso</TableCellCategory>
          </tr>
          <tr>
            <TableCell>Entre 18.6 e 24.9</TableCell>
            <TableCellCategory category="normal">peso ideal</TableCellCategory>
          </tr>
          <tr>
            <TableCell>Entre 25 e 29.9</TableCell>
            <TableCellCategory category="overWeight">sobrepeso</TableCellCategory>
          </tr>
          <tr>
            <TableCell>Entre 30 e 34.9</TableCell>
            <TableCellCategory category="obesityI">obesidade grau I</TableCellCategory>
          </tr>
          <tr>
            <TableCell>Entre 35 e 39.9</TableCell>
            <TableCellCategory category="obesityII">obesidade grau II</TableCellCategory>
          </tr>
          <tr>
            <TableCell>Acima de 40</TableCell>
            <TableCellCategory category="obesityIII">obesidade grau III</TableCellCategory>
          </tr>
        </tbody>
      </Table>
      <FooterDescription>
        O IMC é apenas um indicador. Sempre consulte um profissional da saúde.
      </FooterDescription>
    </CardContainer>
  )
}

export default ClassificationCard
