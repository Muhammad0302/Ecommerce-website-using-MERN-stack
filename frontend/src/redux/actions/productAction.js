import axios from 'axios'
import * as action from '../constants/productContant.js'
const url = 'http://localhost:8000'
export const getProducts =()=> async(dispatch) =>{
    try{
        const {data} = await axios.get(`${url}/products`)
        dispatch({type: action.GET_PRODUCT_SUCCESS,payload: data})
        // console.log(data)
    }catch(error){
        dispatch({type: action.GET_PRODUCT_FAIL,payload: error.message})
        // console.log('Error while calling api',error.message)
    }
}