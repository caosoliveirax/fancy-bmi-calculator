import { useState } from 'react'

const FormCalculator = () => {
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault()
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
        <p></p>
      </div>
    </>
  )
}

export default FormCalculator
