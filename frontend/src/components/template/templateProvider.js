import React from 'react';
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
const TemplateContext = React.createContext(null);
const TemplateProvider = ({ children }) => {
    const theme = createTheme({
        overrides: {
            MuiDialog: {
                paperWidthSm: {
                    maxWidth: 'unset'
                }
            }
        }
    });

    return (
        <TemplateContext.Provider>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </TemplateContext.Provider>       
    );
}

export default TemplateProvider;