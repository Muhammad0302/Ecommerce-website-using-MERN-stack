import { createContext, useState } from 'react';

export const LoginContext = createContext(null);

const ContextProvider = ({children}) => {

    const [ account, setUserAccount ] = useState('');
    
    return (
        <LoginContext.Provider value={{ account, setUserAccount }}>
            {children}
        </LoginContext.Provider>
    )
}

export default ContextProvider;