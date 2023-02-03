import { createSlice } from "@reduxjs/toolkit";


export const loginSlice = createSlice({
  name: "login",
  initialState: {
    value: {
      email: "",
      password: ""
    }
  },
  reducers: {
    login: (state, action) => {

    },
    logout: (state, action) => {

    }
  }
})

export const {
  login,
  logout
} = loginSlice.actions

export default loginSlice.reducer