import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    background: string
    card: string
    button: string
    hover: string
    shadow: string
    focus: string
    text: string
    error: string
  }
}
