import { DECREMENT, INCREMENT } from "./action"


const initialState={
    count:0,
    user:"Gargiy"
}
export const counterReducer=(state=initialState,action)=>{

   switch(action.type){
    case INCREMENT :
        return {...state,count:state.count+1}

          case DECREMENT :
     return {...state,count:state.count-1}
   
    default:
        return state;
   }
 

}