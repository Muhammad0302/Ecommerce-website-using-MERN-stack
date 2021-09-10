import express from 'express'
import { userSignup,userLogin } from '../controller/UserController.js'
import getAllProducts  from '../controller/ProductController.js'

const router = express.Router();

router.post('/signup',userSignup)
router.post('/login',userLogin)
router.get('/products',getAllProducts)

export default router;