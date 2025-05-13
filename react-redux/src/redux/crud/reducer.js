import { ADD_TODO } from "./axtion";


const initialState={
    todos:[]
};
export const todoReducer=(state=initialState,action)=>{
        console.log("input value",action.payload)
    // the issue is I have written action but i have to use action.type inside swith case
    switch(action.type){
        case ADD_TODO:
            return {...state,todos:[...state.todos,action.payload]};

        default:
            return state;
    }
}