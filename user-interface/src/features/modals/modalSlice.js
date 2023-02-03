import { createSlice } from "@reduxjs/toolkit";


export const modalSlice = createSlice({
  name: "modal",
  initialState: { 
    value: {
      open: false, 
      menuItem: ""
    }
  },
  reducers: {
    openModal: (state, action) => {
      state.value = action.payload
    },
    closeModal: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { 
  openModal, 
  closeModal, 
} = modalSlice.actions

export default modalSlice.reducer
