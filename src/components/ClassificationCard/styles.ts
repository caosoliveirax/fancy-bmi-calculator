import styled, { keyframes } from 'styled-components'
import type { BMICategory } from '../../themes/themes'
import { themes } from '../../themes/themes'
import { Container as CardContainer } from '../Card/styles'

const categoryColors: Record<BMICategory, string> = {
  underWeight: themes.underWeight.card,
  normal: themes.normal.card,
  overWeight: themes.overWeight.card,
  obesityI: themes.obesityI.card,
  obesityII: themes.obesityII.card,
  obesityIII: themes.obesityIII.card
}

const slideInFromTop = keyframes`
  from {
    opacity: 0;
    transform: translateY(-50px)
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

export const ClassificationContainer = styled(CardContainer)`
  animation: ${slideInFromTop} 1.5s ease-out forwards;
  grid-area: classification;

  @media (max-width: 768px) {
    aspect-ratio: 4/5;
  }
`

export const Table = styled.table`
  margin-top: 20px;
  width: 100%;
  border-collapse: collapse;

  @media (max-width: 768px) {
    margin-top: 10px;
  }
`

export const TableTitle = styled.h2`
  font-size: 2rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`

export const TableHeaderCell = styled.th`
  background-color: ${({ theme }) => theme.shadow};
  font-size: 1.2rem;
  padding: 14px;

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 10px;
  }
`

export const TableCell = styled.td`
  background-color: ${({ theme }) => theme.shadow};
  border-bottom: 1px solid ${({ theme }) => theme.card};
  font-size: 1rem;
  font-weight: 500;
  padding: 14px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 10px;
  }
`

export const TableCellCategory = styled(TableCell)<{ $category: BMICategory }>`
  background-color: ${({ $category }) => categoryColors[$category]};
  border-bottom: 1px solid ${({ $category }) => categoryColors[$category]};
`

export const FooterDescription = styled.p`
  color: ${({ theme }) => theme.text};
  margin-top: 1rem;
  font-size: 0.9rem;
  font-style: italic;
  padding: 0 40px;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`
