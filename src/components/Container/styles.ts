import { styled } from 'styled-components'

export const Container = styled.div<{ $isResultVisible: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 120px 40px;
  gap: 16px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.background};
  position: relative;
  transition: background-color 2s ease;

  @media (max-width: 1024px) {
    ${({ $isResultVisible }) =>
      $isResultVisible &&
      `
    display: grid;
    align-content: center;
    grid-template-areas:
      'result result'
      'calculator classification';
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 2fr;
    padding: 40px;
    gap: 16px;
    height: auto;
    min-height: 100vh;
  `}
  }

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
    height: auto;
    min-height: 100vh;
  `}
  }

  @media (max-height: 480px) {
    padding: 10px;
    ${({ $isResultVisible }) =>
      $isResultVisible &&
      `
    padding: 20px;
  `}
  }
`
