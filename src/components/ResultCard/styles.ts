import { Container as CardContainer } from '../Card/styles'
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

export const ResultContainer = styled(CardContainer)`
  animation: ${slideInFromLeft} 1.5s ease-out forwards;
  grid-area: result;

  @media (max-width: 768px) {
    aspect-ratio: 3/2;
  }
`

export const ResultTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`

export const ResultValue = styled.p`
  font-size: 2rem;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`

export const ResultCategory = styled.p`
  font-size: 1.75rem;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`

export const ResultMessage = styled.p`
  font-size: 1.25rem;
  padding: 20px;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 10px 0 10px 0;
  }
`
