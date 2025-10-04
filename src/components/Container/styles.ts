import { styled } from 'styled-components'

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.background};
  transition: background-color 2s ease;
`

export const CardContainer = styled.section`
  position: relative;
  height: 800px;
  width: 564px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  box-shadow: 0 16px 32px 0 ${({ theme }) => theme.shadow};
  border: 1px solid ${({ theme }) => theme.card};
  background-color: ${({ theme }) => theme.card};
  border-radius: 3rem;
  padding: 100px 40px;
  margin: 16px;
  gap: 8px;
  z-index: 2;
  transition:
    background-color 1s ease,
    box-shadow 1s ease,
    border-color 1s ease;
`
