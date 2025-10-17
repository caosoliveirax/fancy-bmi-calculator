import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { themes, type BMICategory } from '../../themes/themes'
import type { DefaultTheme } from 'styled-components'

interface ThemeState {
  theme: DefaultTheme
}

const initialState: ThemeState = {
  theme: themes.main
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<BMICategory>) => {
      state.theme = themes[action.payload]
    }
  }
})

export const { setTheme } = themeSlice.actions
export default themeSlice.reducer
