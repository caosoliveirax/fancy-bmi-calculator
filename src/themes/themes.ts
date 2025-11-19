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
    text: '#333',
    background: '#dbeef3ff',
    card: '#A8E6F5',
    button: '#54D9FA',
    hover: '#00ccffff',
    shadow: 'rgba(0, 0, 0, 0.1)',
    focus: '#fff',
    error: '#B11B1B'
  },
  underWeight: {
    text: '#273C49',
    background: '#B7D9F7',
    card: '#5BA9ED',
    button: '#89C1F2',
    hover: '#6aa1d6',
    shadow: 'rgba(0, 0, 0, 0.2)',
    focus: '#cde1f1ff',
    error: '#6A0C0C'
  },
  normal: {
    text: '#fff',
    background: '#509a58',
    card: '#108131',
    button: '#0A5420',
    hover: '#05260F',
    shadow: 'rgba(0, 0, 0, 0.2)',
    focus: '#0D812F',
    error: '#FFFC00'
  },
  overWeight: {
    text: '#333',
    background: '#FBE086',
    card: '#F9D455',
    button: '#FCE28C',
    hover: '#ffeaa6ff',
    shadow: 'rgba(0, 0, 0, 0.2)',
    focus: '#FFEFB1',
    error: '#9E3122'
  },
  obesityI: {
    text: '#333',
    background: '#FFCE8A',
    card: '#FFB753',
    button: '#FFCE8A',
    hover: '#ffc472ff',
    shadow: 'rgba(0, 0, 0, 0.1)',
    focus: '#FFD9AC',
    error: '#862D2D'
  },
  obesityII: {
    text: '#000000',
    background: '#FF7168',
    card: '#FF4135',
    button: '#F5170A',
    hover: '#E81409',
    shadow: 'rgba(0, 0, 0, 0.2)',
    focus: '#FB9893',
    error: '#000000'
  },
  obesityIII: {
    text: '#fff',
    background: '#63577D',
    card: '#8A5AB2',
    button: '#56386E',
    hover: '#53316eff',
    shadow: 'rgba(0, 0, 0, 0.2)',
    focus: '#6E488E',
    error: '#FFFC00'
  }
}
