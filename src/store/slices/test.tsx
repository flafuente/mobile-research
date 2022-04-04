import { createSlice } from '@reduxjs/toolkit'

interface TestState {
  data: Array<String>
}

const initialState: TestState = {
  data: [],
}


export const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    load: (state) => {
      state.data = []
    },
  },
})

export const { load } = testSlice.actions

export default testSlice.reducer