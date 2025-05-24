import { configureStore } from "@reduxjs/toolkit"
import postReducer from "./features/PostSlice";
import { getDefaultNormalizer } from "@testing-library/dom";
import rootSaga from "./sagas/rootSaga";
import createSagaMiddleware from "redux-saga";


const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: {
   post:postReducer
  },
  middleware:(getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializable check for non-serializable data
      thunk:false,
      immutableCheck: false, // Disable immutable check for non-immutable data
    }).concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);


export default store;