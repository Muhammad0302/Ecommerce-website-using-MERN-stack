import React from 'react'
import {makeStyles} from '@material-ui/core'
import {useSelector,useDispatch} from 'react-redux'
import {cartAction} from '../../redux/actions/cartAction' 
const useStyle = makeStyles({

})
function Cart() {

   
    const classes = useStyle()
    return (
        <div>
            <h2>Hello, I am cart component</h2>
        </div>
    )
}
export default Cart
