import styled, { keyframes } from 'styled-components'

const showFooter = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

export const FooterContainer = styled.footer<{ $isResultVisible: boolean }>`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${showFooter} 1s ease forwards;
  ${({ $isResultVisible }) =>
    $isResultVisible &&
    `
    display:none;
  `}
`

export const LinksWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`

export const SocialLink = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.card};
  border-radius: 8px;
  padding: 8px;
  height: 48px;
  width: 48px;
  text-decoration: none;
  border: 1px solid ${({ theme }) => theme.text};
  cursor: pointer;
  overflow: hidden;
  transition: width 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  p {
    flex-shrink: 0;
    display: block;
    flex-wrap: wrap;
    font-weight: bold;
    font-size: 14px;
    color: ${({ theme }) => theme.text};
    content-visibility: hidden;
  }

  &:hover {
    width: 180px;

    &.link-portfolio {
      flex-direction: row-reverse;

      p {
        text-align: end;
      }
    }

    p {
      content-visibility: visible;
      width: 120px;
    }
  }

  svg {
    color: ${({ theme }) => theme.text};
    width: auto;
    height: 100%;
  }
`

export const Copyright = styled.p`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.text};
  opacity: 0.7;
  margin: 16px 0 16px 0;
  text-align: center;
`
