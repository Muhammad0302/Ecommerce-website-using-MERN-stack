import * as action from '../constants/cartConstant'
import axios from 'axios'
const url = 'http://localhost:8000'
export const cartAction =(id)=> async(dispatch) =>{
    try{
        const {data} = await axios.get(`${url}/product/${id}`)
        dispatch({type: action.ADD_TO_CART_SUCCESS,payload: data})
    }catch(error){
        console.log('cartAction api failed',error.message)
    }
}

export const removeFromCart = (id) => (dispatch) => {
    // console.log(id);
    dispatch({
        type: action.REMOVE_FROM_CART,
        payload: id
    })
};