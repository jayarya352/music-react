import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Songs from './pages/Songs';
import {BrowserRouter,Route} from 'react-router-dom'
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/songs/:name"><Songs/></Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
