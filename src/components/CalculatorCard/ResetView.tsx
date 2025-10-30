import { forwardRef } from 'react'
import { ArrowCounterClockwiseIcon } from '@phosphor-icons/react'
import { ResetContainer, ResetFormButton } from './styles'

type Props = {
  onReset: () => void
}

const ResetView = forwardRef<HTMLButtonElement, Props>(({ onReset }, ref) => {
  return (
    <ResetContainer>
      <ResetFormButton ref={ref} onClick={onReset} type="submit">
        <ArrowCounterClockwiseIcon weight="bold" />
      </ResetFormButton>
    </ResetContainer>
  )
})

export default ResetView
