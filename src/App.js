
import './App.css';
import Home from './pages/Home';
import SingleRoom from './pages/SingleRoom';
import { Rooms } from './pages/Rooms';
import Error from './pages/Error';
import Navbar from './componenets/Navbar';
import {Switch,Route}from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route path="/rooms/:slug" component={SingleRoom} />
        <Route component={Error} />
      </Switch>
      </>
    </div>
  );
}

export default App;
