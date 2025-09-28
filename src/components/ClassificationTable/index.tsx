import { useAppSelector } from '../../store/hooks'

const ClassificationTable = () => {
  const value = useAppSelector((state) => state.bmi.value)
  const category = useAppSelector((state) => state.bmi.category)

  if (value === null || category === null) return null

  return (
    <div>
      <h2>Classificações</h2>
      <table>
        <thead>
          <tr>
            <th>IMC</th>
            <th>Categoria</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Abaixo de 18.5</td>
            <td>abaixo do peso</td>
          </tr>
          <tr>
            <td>Entre 18.6 e 24.9</td>
            <td>peso ideal</td>
          </tr>
          <tr>
            <td>Entre 25 e 29.9</td>
            <td>sobrepeso</td>
          </tr>
          <tr>
            <td>Entre 30 e 34.9</td>
            <td>obesidade grau I</td>
          </tr>
          <tr>
            <td>Entre 35 e 39.9</td>
            <td>obesidade grau II</td>
          </tr>
          <tr>
            <td>Acima de 40</td>
            <td>obesidade grau III</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ClassificationTable
