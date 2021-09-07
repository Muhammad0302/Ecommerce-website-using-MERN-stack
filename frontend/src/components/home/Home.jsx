import { Box, makeStyles } from '@material-ui/core'
import React from 'react'
import Banner from './Banner'
import Navbar from './Navbar'
const useStyle = makeStyles({
    component :{
     padding: 10,
     backgroundColor: '#f2f2f2'
    }
})
function Home() {
    const classes = useStyle()
    return (
        <div>
            <Navbar />
            <Box className={classes.component}>
            <Banner />
            </Box>
        </div>
    )
}

export default Home
