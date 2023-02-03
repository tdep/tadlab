import { createSlice } from "@reduxjs/toolkit";


export const loginSlice = createSlice({
  name: "loginCredentials",
  initialState: {
    value: {
      id: "",
      username: "",
      email: "",
      password: ""
    }
  },
  reducers: {
    loginUser: (state, action) => {
      state.value = action.payload
    },
    logoutUser: (state, action) => {
      state.value = action.payload
    }
  }
})

export const {
  loginUser,
  logoutUser
} = loginSlice.actions

export default loginSlice.reducer