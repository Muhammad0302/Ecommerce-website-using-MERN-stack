import express from 'express'
import { userSignup,userLogin } from '../controller/UserController.js'
import {getAllProducts,getProductById}  from '../controller/ProductController.js'

const router = express.Router();

router.post('/signup',userSignup)
router.post('/login',userLogin)
router.get('/products',getAllProducts)
router.get('/product/:id',getProductById)

export default router;