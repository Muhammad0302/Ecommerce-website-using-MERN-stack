import * as actionType from '../constants/productContant.js'
export const getProductsReducer = (state= {products: []},action) =>{
   
    switch(action.type){
        case actionType.GET_PRODUCT_SUCCESS:
            return {products: action.payload}
        case action.GET_PRODUCT_FAIL:
            return {error: action.payload}
        default: 
           return state        
    }

}