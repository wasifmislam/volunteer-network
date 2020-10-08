import React, { createContext, useState } from 'react';

import './App.css';
import Header from './Components/Header/Header';
// import Task from './Components/Task/Task'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Registration from './Components/Resgistration/Registration';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Events from './Components/Events/Events';
import Donation from './Components/Donation/Donation';

export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  
  
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>

        <Header />
       

        <Route path='/home'>
          <Home />
        </Route>
        
        <Route path='/login'>
          <Login />
        </Route>
        <PrivateRoute path='/registration/:volType'>
          <Registration />
          </PrivateRoute>
          <PrivateRoute path='/events'>
           <Events></Events>
        </PrivateRoute>
        <Route path='/donation'>
          <Donation></Donation>
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
