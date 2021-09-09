import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import { templateProvider } from './components/template/templateProvider';
import ContextProvider from './components/context/ContextProvider';
function App() {
  return (
    <templateProvider>
    <ContextProvider>
    <BrowserRouter>
        <Header />
        <Switch>
             <Route exact path='/' component={Home} />
         </Switch>
    </BrowserRouter>
    </ContextProvider>
    </templateProvider>
  );
}

export default App;
