import * as actionType from '../constants/cartConstant'
export const cartActionReducer= (state= {cartItems: []},action) =>{
   
    switch(action.type){
        case actionType.ADD_TO_CART_SUCCESS:
        const item = action.payload  
        const exist = state.cartItems.find(product=>product.id === item.id)  
        if(exist) return
        return {...state,cartItems:[...state.cartItems,item]}
        default: 
           return state        
    }

}