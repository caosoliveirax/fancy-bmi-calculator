import { CardContainer } from '@components/Container/styles'
import { keyframes, styled } from 'styled-components'

const slideInFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

export const AnimatedCardContainer = styled(CardContainer)`
  animation: ${slideInFromLeft} 1.5s ease-out forwards;
`

export const ResultTitle = styled.h2`
  font-size: 2rem;
`

export const ResultValue = styled.p`
  font-size: 2rem;
  font-weight: 700;
`

export const ResultCategory = styled.p`
  font-size: 1.75rem;
  font-weight: 700;
`

export const ResultMessage = styled.p`
  font-size: 1.25rem;
  padding: 20px;
`
