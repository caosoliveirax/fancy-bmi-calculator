import { Container as CardContainer } from '../Card/styles'
import { keyframes, styled } from 'styled-components'

const slideInFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-10px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

export const ResultContainer = styled(CardContainer)`
  animation: ${slideInFromLeft} 1.5s ease-out forwards;
  grid-area: result;
`

export const ResultTitle = styled.p`
  font-size: 2rem;
  font-weight: 600;

  @media (max-width: 1024px) {
    font-size: 1.5rem;
  }

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`

export const ResultValue = styled.p`
  font-size: 2rem;
  font-weight: 700;

  @media (max-width: 1024px) {
    font-size: 1.75rem;
  }

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`

export const ResultCategory = styled.p`
  font-size: 1.75rem;
  font-weight: 700;

  @media (max-width: 1024px) {
    font-size: 1.5rem;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`

export const ResultMessage = styled.p`
  font-size: 1.25rem;
  padding: 20px;

  @media (max-width: 1024px) {
    font-size: 1rem;
    padding: 20px 0 0 0;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 10px 0 10px 0;
  }
`
