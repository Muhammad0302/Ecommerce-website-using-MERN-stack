import React from 'react'
import {makeStyles,InputBase,alpha} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
const useStyle = makeStyles((theme)=>({
    search: {
        position: 'relative',
        borderRadius: 2,
        backgroundColor: '#fff',
        marginLeft: 10,
        width: '40%',
        display: 'flex',
        color: 'black' 
      },
      searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'blue',
        padding: 5
      },
      inputRoot: {
        color: 'inherit',
        width: '100%',
        fontSize: 'unset',
        fontSize: 14
      },
      inputInput: {
        paddingLeft: 20,
        padding: theme.spacing(1, 1, 1, 0)
      }
}))
function SearchBar() {
    const classes = useStyle()
    return (
          <div className={classes.search}>
          
            <InputBase
              placeholder="Search for products, brand and more"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
              <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
          </div>   
    )
}

export default SearchBar
