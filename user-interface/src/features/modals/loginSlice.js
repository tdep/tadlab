import { createSlice } from "@reduxjs/toolkit";


export const loginSlice = createSlice({
  name: "loginCredentials",
  initialState: {
    value: {
      id: "",
      username: "",
      email: "",
      password: "",
      loggedIn: false,
    }
  },
  reducers: {
    loginUser: (state, action) => {
      state.value = action.payload
      // console.log(state.value)
    },
    logoutUser: (state, action) => {
      state.value = action.payload
    },
  }
})

export const {
  loginUser,
  logoutUser,
} = loginSlice.actions

export default loginSlice.reducer