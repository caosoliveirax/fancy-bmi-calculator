import { forwardRef } from 'react'
import { ArrowCounterClockwiseIcon } from '@phosphor-icons/react'
import { ResetContainer, ResetFormButton } from './styles'

type Props = {
  onReset: () => void
}

const ResetView = forwardRef<HTMLButtonElement, Props>(({ onReset }, ref) => {
  return (
    <ResetContainer>
      <ResetFormButton
        ref={ref}
        onClick={onReset}
        type="submit"
        aria-label="Limpar dados e calcular novamente"
      >
        <ArrowCounterClockwiseIcon weight="bold" />
      </ResetFormButton>
    </ResetContainer>
  )
})

export default ResetView
