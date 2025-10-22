import { styled } from 'styled-components'

export const Container = styled.main<{ $isResultVisible: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 40px;
  background-color: ${({ theme }) => theme.background};
  transition: background-color 2s ease;

  @media (max-width: 768px) {
    ${({ $isResultVisible }) =>
      $isResultVisible &&
      `
    display: grid;
    align-content: center;
    grid-template-areas:
      'calculator'
      'result'
      'classification';
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
    overflow-y: auto;
    padding: 20px;
    gap: 16px;
    min-height: 100vh;
    height: auto;
  `}
  }
`
