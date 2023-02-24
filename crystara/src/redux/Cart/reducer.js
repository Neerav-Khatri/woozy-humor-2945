import * as types from "./actionTypes"
const intialstate = {
    cart:[],
    Price:0,
    Saving:0,
    Item:0

}

export const cartReducer=(state = intialstate ,action)=>{

switch(action.type){
   case types.TotalPrice:
    return {...state, Price:action.payload }
   case types.TotalSaving:
    return {...state, Saving:action.payload }     
   case types.TotalItem:
    return {...state, Item:action.payload }
   case types.Get:
    return {...state, cart:action.payload } 
 
    default: return state
}

}