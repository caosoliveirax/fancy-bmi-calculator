import { ArrowCounterClockwiseIcon } from '@phosphor-icons/react'
import { ResetFormButton } from './styles'
import { CardContainer } from '@components/Container/styles'

type Props = {
  onReset: () => void
}

const ResetView = ({ onReset }: Props) => {
  return (
    <>
      <CardContainer>
        <ResetFormButton onClick={onReset} type="submit">
          <ArrowCounterClockwiseIcon weight="bold" size={96} />
        </ResetFormButton>
      </CardContainer>
    </>
  )
}

export default ResetView
