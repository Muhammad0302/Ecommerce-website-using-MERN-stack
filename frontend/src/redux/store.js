import {createStore,combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {getProductsReducer,getProductDetailReducer} from './reducers/getProductsReducer'
import {cartActionReducer} from './reducers/cartActionReducer'
const reducer = combineReducers({
    getProducts:  getProductsReducer,
    getProductDetail: getProductDetailReducer,
    cartAction: cartActionReducer
})

 const middleWare = [thunk]

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleWare))
)

export default store