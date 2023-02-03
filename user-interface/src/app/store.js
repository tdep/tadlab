import { configureStore } from "@reduxjs/toolkit";
import modalReducer from '../features/modals/modalSlice'
import counterReducer from '../features/modals/counterSlice'
import loginReducer from '../features/modals/loginSlice'

export default configureStore({
  reducer: {
    modal: modalReducer,
    login: loginReducer,
    counter: counterReducer
  }
})