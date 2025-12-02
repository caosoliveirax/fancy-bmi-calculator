import { styled } from 'styled-components'

export const Container = styled.section`
  position: relative;
  height: 100%;
  width: 442px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  box-shadow: 0 16px 32px 0 ${({ theme }) => theme.shadow};
  border: 1px solid ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.card};
  border-radius: 2rem;
  padding: 100px 40px;

  z-index: 2;
  transition:
    background-color 1s ease,
    box-shadow 1s ease,
    border-color 1s ease;

  @media (max-width: 1024px) {
    width: 100%;
    aspect-ratio: unset;
    justify-items: center;
    padding: 20px 40px;
    border-radius: 1rem;
    margin: 0px;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    justify-items: center;
    padding: 20px;
    border-radius: 1rem;
    margin: 0px;
  }

  @media (max-width: 480px) {
    padding: 20px;
    border-radius: 1rem;
    margin: 0px;
  }
`
