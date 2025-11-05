import { styled } from 'styled-components'

export const VisuallyHidden = styled.div`
  position: absolute;
  height: 1px;
  width: 1px;
  border: 0;
  clip: rect(0 0 0 0);
  margin: -1px;
  padding: 0;
  overflow: hidden;

  white-space: nowrap;
  word-wrap: normal;
`
