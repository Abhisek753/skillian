import { ADD_TODO, DELETE_TODO, EDIT_TODO } from "./axtion";


const initialState={
    todos:[]
};
export const todoReducer=(state=initialState,action)=>{
        console.log("input value",action.payload)
    // the issue is I have written action but i have to use action.type inside swith case
    switch(action.type){
        case ADD_TODO:
            return {...state,todos:[...state.todos,action.payload]};
             case DELETE_TODO:
            return {...state,todos:state?.todos?.filter((_,index)=>index!==action.payload)};
          case EDIT_TODO :
            return {
                ...state,
                todos: state.todos?.map((todo, index) =>
                    index === action.payload.index ? action.payload.newText : todo
                )
            }
        default:
            return state;
    }
}