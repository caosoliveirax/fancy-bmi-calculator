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
    shadow: 'rgba(255, 255, 255, 0.2)',
    focus: '#fff',
    error: '#B11B1B'
  },
  underWeight: {
    text: '#273C49',
    background: '#B7D9F7',
    card: '#5BA9ED',
    button: '#5BA9ED',
    hover: '#2D91E8',
    shadow: 'rgba(0, 0, 0, 0.2)',
    focus: '#89C1F2',
    error: '#6A0C0C'
  },
  normal: {
    text: '#fff',
    background: '#509a58',
    card: '#108131',
    button: '#0A5420',
    hover: '#05260F',
    shadow: 'rgba(0, 0, 0, 0.2)',
    focus: '#16AE42',
    error: '#FFFC00'
  },
  overWeight: {
    text: '#333',
    background: '#FBE086',
    card: '#F9D455',
    button: '#FCE28C',
    hover: '#ffeaa6ff',
    shadow: 'rgba(0, 0, 0, 0.1)',
    focus: '#F9D455',
    error: '#9E3122'
  },
  obesityI: {
    text: '#333',
    background: '#FFCE8A',
    card: '#FFB753',
    button: '#FFCE8A',
    hover: '#ffc472ff',
    shadow: 'rgba(0, 0, 0, 0.1)',
    focus: '#ffb650ff',
    error: '#862D2D'
  },
  obesityII: {
    text: '#000',
    background: '#FF7168',
    card: '#FF4135',
    button: '#FF4135',
    hover: '#d36554',
    shadow: 'rgba(0, 0, 0, 0.2)',
    focus: '#ff9484ff',
    error: '#000000'
  },
  obesityIII: {
    text: '#fff',
    background: '#A37DC2',
    card: '#8A5AB2',
    button: '#56386E',
    hover: '#53316eff',
    shadow: 'rgba(0, 0, 0, 0.2)',
    focus: '#6E488E',
    error: '#FFFC00'
  }
}
