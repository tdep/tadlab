import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import modalReducer from '../features/modals/modalSlice'
import loginReducer from '../features/modals/loginSlice'
import registerReducer from '../features/modals/registerSlice'

const store = configureStore({
  reducer: {
    modal: modalReducer,
    login: loginReducer,
    register: registerReducer
  }
})

export default store