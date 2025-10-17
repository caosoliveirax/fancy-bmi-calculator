import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

type BmiSliceState = {
  value: number | null
  category: string | null
}

const initialState: BmiSliceState = {
  value: null,
  category: null
}

const bmiSlice = createSlice({
  name: 'bmi',
  initialState,
  reducers: {
    setResult: (state, action: PayloadAction<{ value: number; category: string }>) => {
      state.value = action.payload.value
      state.category = action.payload.category
    },
    resetResult: (state) => {
      state.value = initialState.value
      state.category = initialState.category
    }
  }
})

export const { setResult, resetResult } = bmiSlice.actions
export default bmiSlice.reducer
