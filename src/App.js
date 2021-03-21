import logo from './logo.svg';
import './App.css';
import React from 'react'

import Login from './Components/Login';
import { Provider } from 'react-redux';
import store from './Redux/store';
import Dashboard from './Components/Dashboard';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import { Alert } from 'bootstrap-4-react';
import Navbar from './Components/Navbar';
import { Suspense, lazy } from 'react';
import Check_Balance from './Components/Wallets/Check_Balance';
import { useSelector } from 'react-redux';

// const Nav_Bar = React.lazy(() => import('./Components/Wallets/Check_Balance'));
function App() {
  return (
    <div className="App">
      <Provider store={store}>
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      <Navbar />
      {/* </Suspense> */}
      <Router>
      {/* <ul className="App-header"> 
              <li> 
                <Link to="/">Home</Link> 
              </li> 
              <li> 
                <Link to="/allwallets">About Us</Link> 
              </li> 
              <li> 
                <Link to="/contact">Contact Us</Link> 
              </li> 
            </ul>  */}
          <Switch>
            <Route exact path='/' component={Login}></Route>
            <Route exact path='/login' component={Login}></Route>
            <Route exact path='/dashboard' component={Dashboard}></Route>
          </Switch>
        </Router>
     </Provider>
    </div>
  );
}

export default App;
