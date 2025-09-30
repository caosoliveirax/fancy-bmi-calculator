import { styled } from 'styled-components'

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  height: 100vh;
  width: 100vw;
`

export const CardContainer = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  box-shadow: 0 8px 32px 0 rgba(0, 174, 255, 0.1);
  border: 1px solid rgba(0, 204, 255, 0.49);
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
  padding: 40px;
  border-radius: 3rem;
  gap: 8px;
  margin: 16px;
  height: 800px;
  width: 564px;
  z-index: 2;
`
