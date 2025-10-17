import { configureStore } from '@reduxjs/toolkit'

import themeReducer from './reducers/theme'
import bmiReducer from './reducers/bmi'

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    bmi: bmiReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
