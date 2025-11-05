import { ArrowCounterClockwiseIcon } from '@phosphor-icons/react'
import { ResetContainer, ResetFormButton } from './styles'

type Props = {
  onReset: () => void
}

const ResetView = ({ onReset }: Props) => {
  return (
    <ResetContainer>
      <ResetFormButton aria-label="Retornar a calculadora" onClick={onReset} type="submit">
        <ArrowCounterClockwiseIcon weight="bold" />
      </ResetFormButton>
    </ResetContainer>
  )
}

export default ResetView
