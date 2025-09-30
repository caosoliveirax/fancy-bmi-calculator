import type { DefaultTheme } from 'styled-components'

export const themes: Record<string, DefaultTheme> = {
  main: {
    background: '#fff',
    card: 'rgba(0, 204, 255, .2)',
    shadow: 'rgba(0, 204, 255, .1)',
    text: '#333'
  },
  underWeight: {
    background: 'rgba(66, 170, 170, .7)',
    card: 'rgba(66, 170, 170, .5)',
    shadow: 'rgba(66, 170, 170, .1)',
    text: '#fff'
  },
  normal: {
    background: 'rgba(1, 150, 33, .7)',
    card: 'rgba(1, 150, 33, .5)',
    shadow: 'rgba(1, 150, 33, .1)',
    text: '#fff'
  },
  overWeight: {
    background: 'rgba(248, 198, 30, .7)',
    card: 'rgba(248, 198, 30, .5)',
    shadow: 'rgba(248, 198, 30, .1)',
    text: '#333'
  },
  obesityI: {
    background: 'rgba(255, 159, 28, .7)',
    card: 'rgba(255, 159, 28, .5)',
    shadow: 'rgba(255, 159, 28, .1)',
    text: '#333'
  },
  obesityII: {
    background: 'rgba(253, 90, 70, .7)',
    card: 'rgba(253, 90, 70, .5)',
    shadow: 'rgba(253, 90, 70, .1)',
    text: '#fff'
  },
  obesityIII: {
    background: 'rgba(158, 89, 214, .7)',
    card: 'rgba(158, 89, 214, .5)',
    shadow: 'rgba(158, 89, 214, .1)',
    text: '#fff'
  }
}
