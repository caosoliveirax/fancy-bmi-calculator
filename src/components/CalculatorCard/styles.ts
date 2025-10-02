import { styled } from 'styled-components'

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
  font-size: 1.25rem;
  text-align: center;
  height: 64px;
  width: 104px;
  margin-bottom: 1.25rem;
  border: 1px solid ${({ theme }) => theme.card};
  border-radius: 8px;
`

export const FormButton = styled.button`
  background-color: ${({ theme }) => theme.button};
  box-shadow: 0 0px 16px 4px ${({ theme }) => theme.shadow};
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
`
