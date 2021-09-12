import * as actionType from '../constants/cartConstant'
export const cartActionReducer= (state= {cartItems: []},action) =>{
   
    switch(action.type){
        case actionType.ADD_TO_CART_SUCCESS:
        const item = action.payload  
        const exist = state.cartItems.find(product=>product.id === item.id)  
        if(exist) return
        return {...state,cartItems:[...state.cartItems,item]}
        case actionType.REMOVE_FROM_CART:
            // console.log(state.cartItems)
            // console.log(action.payload);
            let s =  {
                ...state, cartItems: state.cartItems.filter(product => product.id !== action.payload)
            }
            // console.log(s);
            return s;
        default: 
           return state        
    }

}