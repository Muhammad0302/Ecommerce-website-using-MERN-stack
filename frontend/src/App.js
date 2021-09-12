import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import { templateProvider } from './components/template/templateProvider';
import ContextProvider from './components/context/ContextProvider';
import Cart from './components/cart/Cart';
import DetailProductView from './components/viewItem/DetailProductView';
function App() {
  return (
    <templateProvider>
    <ContextProvider>
    <BrowserRouter>
        <Header />
        <Switch>
             <Route exact path='/' component={Home} />
             <Route exact path='/cart' component={Cart} />
             <Route excat path='/product/:id' component={DetailProductView} />
         </Switch>
    </BrowserRouter>
    </ContextProvider>
    </templateProvider>
  );
}

export default App;
