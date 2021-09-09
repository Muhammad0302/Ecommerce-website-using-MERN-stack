import React, { useState } from 'react'
import {Box, Button, Dialog,DialogContent, TextField, Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core'
import { authenticateSignup,authenticatelogin } from '../service/api'
const useStyle = makeStyles({
  component: {
      height: '70vh',
      width: '88vh',
  },
  image: {
      backgroundImage: `url(${'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png'})`,
      height: '74vh',
      backgroundRepeat: 'no-repeat',
      background: '#2874f0',
      width: '40%',
      backgroundPosition: 'center 85%',
      marginBottom: -30,
      marginLeft: -25,
      marginTop: -20,
    //   padding: '45px 35px',
      '& > *':{
          color: '#FFFFFF',
          fontWeight: 600
      }
    },
    login:{
        padding: '25px 35px',
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        '& > *': {
            marginTop: 17
        }
      },
      text: {
      color: '#878787',
      fontSize: 12
      },
      loginBtn: {
      textTransform: 'none',
      background: '#FB641B',
      color: '#FFFFFF',
      borderRadius: 2  
      },
      requestBtn: {
        textTransform: 'none',
        background: '#FFFFFF',
        color: '#2874f0',
        borderRadius: 2,
        boxShadow: '0 2px 4px 0 rgb(0,0,0 /20%)'  
      },
      createText: {
       textAlign: 'center',
       marginTop: 'auto',
       marginBottom: -40,
       fontSize: 14,
       color: '#2874f0',
       fontWeight: 600,
       cursor: 'pointer' 
      },
      error: {
          fontSize: 10,
          color: '#ff6161',
          fontWeight: 600,
          marginTop: 10,
          lineHeight: 0
      } 
})
function Login({open,setopen,setUserAccount}) {
    const initialValue = {
        login: {
            view: 'login',
            heading: 'login',
            subHeading: 'Get access to your orders, wishlist and Recommendations'
        },
        signUp: {
            view: 'Signup',
            heading: 'Look like youre new here',
            subHeading: 'Signup with your email to get started'
            
        }
    }
    const SignupInitialValue = {
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        password: ''
    }
    const logInitialValue = {
        username: '',
        password: ''
    }
   const [login,setLogin] = useState(logInitialValue)
   const [signup, setSignup] = useState(SignupInitialValue)
   const classes = useStyle()
   const [account, setaccount] = useState(initialValue.login)
   const [error,setError] = useState(false)
   const closeHandle = () =>{
     setopen(false)
     setaccount(initialValue.login)
    }
    const toggleAccount = () =>{
        setaccount(initialValue.signUp)
    }
    const signupUser = async() =>{
       const response = await authenticateSignup(signup)
       if(!response) 
       return
       closeHandle()
       setUserAccount(signup.username)
    }
    const HandleInputs = (e) =>{
        setSignup({...signup,[e.target.name]: e.target.value})
        // console.log(signup)
    }
    const handleLogin = (e) =>{
        setError(false)
        setLogin({...login,[e.target.name]: e.target.value})
    }
    const loginUser = async() =>{
      let  response = await authenticatelogin(login)
      if(!response)
      {
          setError(true)
        return
      }

       closeHandle()
       setUserAccount(login.username)
    }
    return (
        <Dialog  open={open} onClose={closeHandle} >
           <DialogContent className={classes.component}>
            <Box style={{display:'flex'}}>
               <Box className={classes.image}>
                <Typography variant="h5" style={{padding: '45px 35px 20px 35px'}}>{account.heading}</Typography>
                <Typography style={{padding: '0 35px 0 35px'}}>{account.subHeading}</Typography>
               </Box>
               {
                   account.view === 'login' ? 
                   <Box className={classes.login}>
                        <TextField onChange={(e)=>handleLogin(e)} name='username' label='Enter userName/Mobile number' />
                        <TextField onChange={(e)=>handleLogin(e)} name='password' label='Enter Password'/>
                        {
                            error && <Typography className={classes.error}>Invalid userName or Password</Typography>
                        }
                        <Typography className={classes.text}>By continuing, you agree to Flipkart's Terms of use and Privacy Policy</Typography>
                        <Button onClick={()=>loginUser()}  variant="contained" className={classes.loginBtn}>Login</Button>
                        <Typography style={{textAlign: 'center'}}>OR</Typography>
                        <Button variant="contained" className={classes.requestBtn}>Request OTP</Button>
                        <Typography onClick={()=>toggleAccount()} className={classes.createText}>New to Flipkart? Create an account</Typography>
                 </Box> :
                 <Box className={classes.login}>
                        <TextField onChange={(e)=>HandleInputs(e)} name='firstname' label='Enter Firstname' />
                        <TextField onChange={(e)=>HandleInputs(e)} name='lastname' label='Enter Lastname'/>
                        <TextField onChange={(e)=>HandleInputs(e)} name='username' label='Enter Username' />
                        <TextField onChange={(e)=>HandleInputs(e)} name='email' label='Enter Email'/>
                        <TextField onChange={(e)=>HandleInputs(e)} name='password' label='Enter Password' />
                        <Button onClick={()=>signupUser()} variant="contained" className={classes.loginBtn}>Signup</Button>
                   </Box>
                 
               }
               
            </Box>
           </DialogContent> 
        </Dialog>
    )
}

export default Login
