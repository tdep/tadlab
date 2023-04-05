import { createSlice } from "@reduxjs/toolkit";

export const interfaceSlice = createSlice({
  name: "interface",
  initialState: {
    value: {
      power: false
    }
  },
  reducers: {
    togglePwr: (state, action) => {
      state.value = action.payload;
    }
  }
})

export const {
  togglePwr
} = interfaceSlice.actions

export default interfaceSlice.reducer