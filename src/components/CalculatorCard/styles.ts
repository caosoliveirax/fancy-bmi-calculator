import { styled, keyframes } from 'styled-components'
import { CardContainer } from '../Container/styles'

export const cardLoad = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

export const AnimatedCardContainer = styled(CardContainer)`
  animation: ${cardLoad} 1s ease forwards;
`

export const MainTitle = styled.h1`
  font-size: 3.25rem;
  font-weight: 700;
  margin-bottom: 16px;
`

export const MainDescription = styled.p`
  font-size: 1.5rem;
  padding: 0 24px 24px;
`

export const FormCalculator = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 300px;
`

export const FormLabel = styled.label`
  font-size: 1.3rem;
  font-weight: 300;
  margin-bottom: 0.5rem;
`

export const FormInput = styled.input`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  font-weight: 300;
  text-align: center;
  height: 64px;
  width: 104px;
  margin-bottom: 1.25rem;
  border: 1px solid ${({ theme }) => theme.card};
  border-radius: 8px;
  transition:
    background-color 0.3s ease,
    box-shadow 0.3s ease;

  &::placeholder {
    color: ${({ theme }) => theme.text};
    opacity: 0.7;
    font-size: 1rem;
  }

  &:focus::placeholder {
    color: transparent;
  }

  &:focus {
    background-color: ${({ theme }) => theme.focus};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.shadow};
    outline: none;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`

export const FormButton = styled.button`
  background-color: ${({ theme }) => theme.button};
  box-shadow: 0 0px 8px 4px ${({ theme }) => theme.shadow};
  color: ${({ theme }) => theme.text};
  margin-top: 16px;
  height: 56px;
  width: 160px;
  padding: 0.5rem;
  font-size: 1.15rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  border: none;
  border-radius: 16px;
  cursor: pointer;
  transition:
    background-color ease 0.3s,
    transform ease 0.3s,
    box-shadow ease 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.hover};
    transform: scale(1.02);
    box-shadow: 0 0 16px 0px ${({ theme }) => theme.hover};
  }

  &:active {
    background-color: ${({ theme }) => theme.button};
    transform: scale(0.95);
  }
`
