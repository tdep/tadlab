import { configureStore } from "@reduxjs/toolkit";
import modalReducer from '../features/modals/modalSlice'
import counterReducer from '../features/modals/counterSlice'

export default configureStore({
  reducer: {
    modal: modalReducer,
    counter: counterReducer
  }
})