// import { createStore } from "redux";
// import { counterReducer } from "./redux/counter/reducer";

// export const store=createStore(counterReducer)

import { createStore,combineReducers } from "redux";
import { counterReducer } from "./redux/counter/reducer";
import { todoReducer } from "./redux/crud/reducer";


const rootReducer=combineReducers({
    counter:counterReducer,
    todo:todoReducer,
});

export const store=createStore(rootReducer);