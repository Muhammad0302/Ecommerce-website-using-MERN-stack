import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
        <Header />
        <Switch>
             <Route exact path='/' component={Home} />
         </Switch>
    </BrowserRouter>
  );
}

export default App;
