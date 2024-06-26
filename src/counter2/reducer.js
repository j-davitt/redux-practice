import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: 'counter2',
  initialState: {
    value:0
  },
  reducers: {
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    }
  }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export const selectCount = state => state.counter2.value

export default counterSlice.reducer