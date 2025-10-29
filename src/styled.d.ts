import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    text: string
    background: string
    card: string
    button: string
    hover: string
    shadow: string
    focus: string
    error: string
  }
}
