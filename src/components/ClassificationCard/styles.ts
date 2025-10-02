import styled from 'styled-components'
import type { BMICategory } from '../../themes/themes'
import { themes } from '../../themes/themes'

const categoryColors: Record<BMICategory, string> = {
  underWeight: themes.underWeight.card,
  normal: themes.normal.card,
  overWeight: themes.overWeight.card,
  obesityI: themes.obesityI.card,
  obesityII: themes.obesityII.card,
  obesityIII: themes.obesityIII.card
}

export const Table = styled.table`
  margin-top: 20px;
  width: 100%;
  border-collapse: collapse;
`
export const TableTitle = styled.h2`
  font-size: 2rem;
`

export const TableHeaderCell = styled.th`
  background-color: ${({ theme }) => theme.shadow};
  font-size: 1.2rem;
  padding: 14px;
`

export const TableCell = styled.td`
  background-color: ${({ theme }) => theme.shadow};
  border-bottom: 1px solid ${({ theme }) => theme.card};
  font-size: 1rem;
  font-weight: 500;
  padding: 14px;
  text-align: center;
`

export const TableCellCategory = styled(TableCell)<{ category: BMICategory }>`
  background-color: ${({ category }) => categoryColors[category]};
  border-bottom: 1px solid ${({ category }) => categoryColors[category]};
`

export const FooterDescription = styled.p`
  color: ${({ theme }) => theme.text};
  margin-top: 1rem;
  font-size: 0.9rem;
  padding: 0 40px;
`
