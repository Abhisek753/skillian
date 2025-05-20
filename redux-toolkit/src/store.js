import { configureStore } from "@reduxjs/toolkit";
 import counterReducer from "./features/CounterSlice"
import postReducer from "./features/postSlice"
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    post:postReducer
  },
})