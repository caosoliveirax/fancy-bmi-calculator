import { configureStore } from '@reduxjs/toolkit'

import themeReducer from './reducers/themeSlice'
import bmiReducer from './reducers/bmiSlice'

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    bmi: bmiReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
