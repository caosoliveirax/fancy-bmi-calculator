import { styled, keyframes } from 'styled-components'
import { IMaskInput } from 'react-imask'
import { Container as CardContainer } from '../Card/styles'

export const showCard = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

export const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  10% {
    transform: rotate(-360deg);
  }

  to {
    transform: rotate(-360deg);
  }
`

export const pulse = keyframes`
  0%, 10%, 100% {
    transform: scale(1);
    /* O box-shadow foi removido daqui temporariamente */
  }
  5% {
    transform: scale(1.05);
  }
`

export const CalculatorContainer = styled(CardContainer)`
  aspect-ratio: 3/4;
  width: unset;
  animation: ${showCard} 1s ease forwards;
  grid-area: calculator;

  @media (max-width: 1024px) {
    aspect-ratio: 4/5;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 480px) {
    flex-direction: row;
    width: 100%;
  }
`
export const ResetContainer = styled(CardContainer)`
  grid-area: calculator;

  @media (max-width: 1024px) {
    height: 100%;
  }

  @media (max-width: 768px) {
    aspect-ratio: 3/1;
    padding: 0;
  }
`

export const MainTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1.15rem;

  @media (max-width: 1024px) {
    font-size: 2.75rem;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-height: 480px) {
    display: none;
  }
`

export const MainDescription = styled.p`
  font-size: 1.25rem;
  width: 90%;
  margin-bottom: 1.15rem;

  @media (max-width: 1024px) {
    font-size: 1.25rem;
    width: 85%;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    width: 75%;
  }

  @media (max-height: 480px) {
    width: 100%;
  }

  @media (max-height: 480px) {
    display: none;
  }
`

export const FormCalculator = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media (max-height: 480px) {
    flex-direction: row;
    justify-content: center;
    gap: 40px;
  }
`

export const FormLabel = styled.label`
  font-size: 1.2rem;
  font-weight: 500;

  @media (max-width: 1024px) {
    font-size: 1.1rem;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-height: 480px) {
    font-size: 1rem;
  }
`

export const InputContainer = styled.div`
  width: 160px;
  position: relative;
  margin-top: 0.5rem;
  margin-bottom: 2rem;

  @media (max-height: 480px) {
    margin-bottom: 1.25rem;
    margin-top: 0;
  }
`

export const FormInput = styled(IMaskInput)`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  font-size: 1.25rem;
  font-weight: 400;
  text-align: center;
  height: 64px;
  width: 104px;
  margin-top: 0.5rem;
  border: 1px solid ${({ theme }) => theme.card};
  border-radius: 8px;
  transition:
    background-color 0.3s ease,
    box-shadow 0.3s ease;

  &::placeholder {
    color: ${({ theme }) => theme.text};
    font-size: 0.9rem;
    font-weight: 600;
  }

  &:focus::placeholder {
    color: transparent;
  }

  &:focus-visible {
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.focus};
    outline: 3px solid ${({ theme }) => theme.button};
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  @media (max-width: 1024px) {
    font-size: 1.25rem;
    font-weight: 40;
    height: 56px;

    &::placeholder {
      font-weight: 400;
      font-size: 0.95rem;
    }
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    font-weight: 400;
    height: 40px;

    &::placeholder {
      font-weight: 400;
      font-size: 0.9rem;
    }
  }

  @media (max-height: 480px) {
    font-size: 1.3rem;
    height: 48px;
    width: 160px;
  }
`

export const InputError = styled(FormInput)`
  box-shadow: 0 0 0 3px ${({ theme }) => theme.error};
`

export const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.error};
  font-size: 14px;
  font-weight: 500;
  position: absolute;
  bottom: -24px;
  left: 0;
  right: 0;
  margin: 0 auto;

  @media (max-width: 1024px) {
    font-size: 12px;
    bottom: -20px;
  }

  @media (max-width: 768px) {
    font-size: 12px;
    bottom: -20px;
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
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition:
    background-color ease 0.3s,
    transform ease 0.3s;

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.text};
  }

  &:hover {
    background-color: ${({ theme }) => theme.hover};
    transform: scale(1.05);
  }

  &:active {
    background-color: ${({ theme }) => theme.button};
    transform: scale(0.95);
  }

  @media (max-width: 1024px) {
    font-size: 1rem;
    width: 128px;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin: 0 0 16px 0;
    width: 104px;
  }

  @media (max-height: 480px) {
    width: 160px;
    height: 56px;
    margin: 0;
  }
`

export const ResetFormButton = styled.button`
  background-color: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text};
  box-shadow: 0 0 8px 0px ${({ theme }) => theme.background};
  border: none;
  border-radius: 50%;
  width: 200px;
  height: 200px;
  cursor: pointer;
  animation: ${pulse} 10s infinite ease-in-out;

  /* TODO: A animação de box-shadow no 'pulse' não funciona em conjunto com a de 'transform'.
    O navegador parece ter um bug de otimização que ignora a animação da sombra.
    A solução ideal é criar duas animações separadas e sincronizadas, uma para 'transform'
    e outra para 'box-shadow', e aplicá-las ao mesmo tempo.
    Isso foi deixado para uma futura refatoração para não bloquear outras tarefas.
  */

  transition:
    background-color ease 0.3s,
    transform ease 0.3s,
    box-shadow ease 0.3s,
    color ease 0.3s;

  svg {
    animation: ${spin} 10s infinite ease-in-out;
    font-size: 96px;
  }

  &:focus-visible {
    outline: 5px solid ${({ theme }) => theme.text};
  }

  &:hover {
    background-color: ${({ theme }) => theme.card};
    color: ${({ theme }) => theme.text};
    transform: scale(1.01);
    box-shadow: 0 0 24px 8px ${({ theme }) => theme.background};
  }

  &:active {
    background-color: ${({ theme }) => theme.button};
    transform: scale(0.95);
  }

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;

    svg {
      font-size: 48px;
    }
  }
`
