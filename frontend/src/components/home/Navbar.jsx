import React from 'react'
import {Box,Typography,makeStyles} from '@material-ui/core'
import { navData } from '../constants/data'

const useStyle = makeStyles({
    component:{
        display: 'flex'
    }
})

function Navbar() {
    const classes = useStyle()
    return (
        <Box className={classes.component}>
            {
                navData.map(data=>(
             <Box>  
             <img src={data.url} alt="" />
            <Typography>{data.text}</Typography>    
            </Box>   
                ))
            }
        </Box>
    )
}

export default Navbar
