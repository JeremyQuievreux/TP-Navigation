import './App.scss';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from './Home/Home';
import Contact from './Contact/Contact';
import Connect from './Connect/Connect';
import Navbar from './Navbar/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/login">
            <Connect />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
