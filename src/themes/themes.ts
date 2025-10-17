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
    hover: '#00ccffff',
    shadow: 'rgba(255, 255, 255, 0.2)',
    text: '#333',
    focus: '#fff',
    error: '#ff2c2c'
  },
  underWeight: {
    background: '#9ED3D3',
    card: '#42AAAA',
    button: '#9ED3D3',
    hover: '#6ed1d1ff',
    shadow: 'rgba(255, 255, 255, 0.2)',
    text: '#fff',
    focus: 'rgba(255, 255, 255, 0.2)',
    error: '#d1001f'
  },
  normal: {
    background: '#7CC98D',
    card: '#3FAF57',
    button: '#149D31',
    hover: '#029c23ff',
    shadow: 'rgba(0, 0, 0, 0.1)',
    text: '#fff',
    focus: 'rgba(255, 255, 255, 0.2)',
    error: '#d1001f'
  },
  overWeight: {
    background: '#FCE28C',
    card: '#F9D455',
    button: '#FCE28C',
    hover: '#ffeaa6ff',
    shadow: 'rgba(0, 0, 0, 0.1)',
    text: '#333',
    focus: 'rgba(255, 255, 255, 0.2)',
    error: '#fd5a46'
  },
  obesityI: {
    background: '#FFCE8A',
    card: '#FFB753',
    button: '#FFCE8A',
    hover: '#ffc472ff',
    shadow: 'rgba(0, 0, 0, 0.1)',
    text: '#333',
    focus: 'rgba(255, 255, 255, 0.2)',
    error: '#fd5a46'
  },
  obesityII: {
    background: '#FDAAA0',
    card: '#FD624F',
    button: '#520A00',
    hover: '#3d0700ff',
    shadow: 'rgba(0, 0, 0, 0.2)',
    text: '#fff',
    focus: 'rgba(255, 255, 255, 0.2)',
    error: '#a0000dff'
  },
  obesityIII: {
    background: '#CEAAEB',
    card: '#AC71DC',
    button: '#56386E',
    hover: '#53316eff',
    shadow: 'rgba(0, 0, 0, 0.2)',
    text: '#fff',
    focus: 'rgba(255, 255, 255, 0.2)',
    error: '#a0000dff'
  }
}
