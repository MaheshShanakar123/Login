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
import { Suspense, lazy } from 'react';
import Add_Funds from './Components/Wallets/Add_Funds';

// const Nav_Bar = React.lazy(() => import('./Components/Wallets/Check_Balance'));
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Dashboard />
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      {/* </Suspense> */}
      <Router>
          <Switch>
            <Route exact path='/' component={Login}></Route>
            <Route exact path='/login' component={Login}></Route>
            <Route exact path='/addfunds' component={Add_Funds}></Route>
          </Switch>
        </Router>
     </Provider>
    </div>
  );
}

export default App;
