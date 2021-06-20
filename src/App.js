import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Songs from './pages/Songs';
import Sidebar from './components/layout/Sidebar'
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import AudioPlayer from './components/layout/AudioPlayer';
import {BrowserRouter,Route} from 'react-router-dom'
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
function App() {
  return (
    <BrowserRouter>
    <div id="wrapper" data-scrollable="true">
      <Sidebar />
      <main id="pageWrapper">
        <Header />  
        <div className="banner bg-home"/>
        
          <Switch>
            <Route exact path="/" ><Home/></Route>
            <Route exact path="/songs/:name"><Songs/></Route>
          </Switch>
        <Footer />
        <AudioPlayer />
      </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
