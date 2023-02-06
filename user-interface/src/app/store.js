import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import modalReducer from '../features/modals/modalSlice'
import counterReducer from '../features/modals/counterSlice'
import loginReducer from '../features/modals/loginSlice'

const store = configureStore({
  reducer: {
    modal: modalReducer,
    login: loginReducer,
    counter: counterReducer
  }
})

export default store