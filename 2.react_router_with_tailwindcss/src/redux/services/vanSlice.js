import { createSlice } from '@reduxjs/toolkit'

export const vanSlice = createSlice({
  name: 'vanId',
  initialState: {
    value: 0
  },
  reducers: {
    
    vanIdStore: (state, action) => {
      state.value += action.payload
    }
  }
})

export const { vanIdStore } = vanSlice.actions

export default vanSlice.reducer