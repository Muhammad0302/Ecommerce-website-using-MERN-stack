import React from 'react'
import {Box,Typography,makeStyles} from '@material-ui/core'
import { navData } from '../constants/data'

const useStyle = makeStyles(theme=>({
    component:{
        display: 'flex',
        margin: '55px 130px 0 130px',
        justifyContent: 'space-between',
        // flexWrap: 'wrap'
        overflowX: 'overlay',
        [theme.breakpoints.down('md')]: {
            margin: '55px 0 0 0',
        }
    },
    container: {
        textAlign: 'center',
        padding: '12px 8px'

    },
    image: {
        width: 64
    },
    text: {
        fontSize: 14,
        fontWeight: 600
    }
}));

function Navbar() {
    const classes = useStyle()
    return (
        <Box className={classes.component}>
            {
                navData.map(data=>(
             <Box className={classes.container}>  
             <img className={classes.image} src={data.url} alt="" />
            <Typography className={classes.text}>{data.text}</Typography>    
            </Box>   
                ))
            }
        </Box>
    )
}

export default Navbar
