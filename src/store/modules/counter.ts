import { createSlice } from '@reduxjs/toolkit'
const useCounter = createSlice({
  name: 'counter',
  initialState: {
    num: 0
  },
  reducers: {
    setNum(state, { payload }) {
      state.num = state.num + payload
    }
  }
})
export const { setNum } = useCounter.actions
export default useCounter.reducer
