import { createSlice } from "@reduxjs/toolkit";

export const registerSlice = createSlice({
  name: "registration",
  initialState: {
    value: {
      id: "",
      username: "",
      email: "",
      password: "",
      passwordConfirm: ""
    }
  },
  reducers: {
    registerNewUser: (state, action) => {
      state.value = action.payload
    }
  }
})

export const {
  registerNewUser
} = registerSlice.actions

export default registerSlice.reducer