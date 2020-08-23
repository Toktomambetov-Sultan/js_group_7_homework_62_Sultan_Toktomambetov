import React from 'react';
import './App.css';
import {
  Route,
  Switch,
  BrowserRouter
} from 'react-router-dom';
import contacts from '../contacts/contacts';
import home from "./../home/home";
import about from '../about/about';
import welcome from '../welcome/welcome';


function App() {
  return (
    <BrowserRouter >
      <Switch >
      <Route
          path="/"
          exact
          component={welcome}
        />
        <Route
          path="/home"
          exact
          component={home}
        />
        <Route
          path="/contacts"
          component={contacts}
        />
        <Route
          path="/about"
          component={about}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;