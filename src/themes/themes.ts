import type { DefaultTheme } from 'styled-components'

export type BMICategory =
  | 'underWeight'
  | 'normal'
  | 'overWeight'
  | 'obesityI'
  | 'obesityII'
  | 'obesityIII'

export const themes: Record<string, DefaultTheme> = {
  main: {
    background: '#f1f1f1f1',
    card: '#A8E6F5',
    button: '#54D9FA',
    shadow: 'rgba(255, 255, 255, 0.2)',
    text: '#333'
  },
  underWeight: {
    background: '#9ED3D3',
    card: '#42AAAA',
    button: '#9ED3D3',
    shadow: 'rgba(255, 255, 255, 0.2)',
    text: '#fff'
  },
  normal: {
    background: '#7CC98D',
    card: '#3FAF57',
    button: '#149D31',
    shadow: 'rgba(0, 0, 0, 0.1)',
    text: '#fff'
  },
  overWeight: {
    background: '#FCE28C',
    card: '#F9D455',
    button: '#FCE28C',
    shadow: 'rgba(0, 0, 0, 0.1)',
    text: '#333'
  },
  obesityI: {
    background: '#FFCE8A',
    card: '#FFB753',
    button: '#FFCE8A',
    shadow: 'rgba(0, 0, 0, 0.1)',
    text: '#333'
  },
  obesityII: {
    background: '#FDAAA0',
    card: '#FD624F',
    button: '#520A00',
    shadow: 'rgba(0, 0, 0, 0.2)',
    text: '#fff'
  },
  obesityIII: {
    background: '#CEAAEB',
    card: '#AC71DC',
    button: '#56386E',
    shadow: 'rgba(0, 0, 0, 0.2)',
    text: '#fff'
  }
}
