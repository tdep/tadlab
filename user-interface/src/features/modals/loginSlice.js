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
      console.log(state.value)
    },
    logoutUser: (state, action) => {
      state.value = action.payload
    },
    loginTrigger: (state,action) => {
      state.value = action.payload
      console.log(state.value.loggedIn)
      return(state.value.loggedIn)
    }
  }
})

export const {
  loginUser,
  logoutUser,
  loginTrigger
} = loginSlice.actions

export default loginSlice.reducer