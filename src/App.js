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
  Switch,
  Redirect
} from 'react-router-dom';
import { Alert } from 'bootstrap-4-react';
import { Suspense, lazy } from 'react';
import Add_Funds from './Components/Wallets/Add_Funds';
import NotFound from './Components/NotFound';
// const Dashboard = React.lazy(() => import('./Components/Dashboard'));
import { useSelector, useDispatch } from 'react-redux';

const baseUrl = process.env.REACT_APP_URL;
console.log("BaseUrl", baseUrl);
function App() {
  const loginuser = useSelector(state => state.loginReducer);
  console.log(loginuser.user);
  const authentication = {
    isLoggedIn: loginuser.isLoggedIn,

    onAuthentication() {
      this.isLoggedIn = loginuser.isLoggedIn
    },
    getLoggedInStatus() {
      return this.isLoggedIn
    }
  }
  function SecuredRoute(props) {
    return (
      <Route path={props.path} render={data => authentication.getLoggedInStatus() ?
        <props.component {...data}></props.component> :
        <Redirect to={{ pathname: '/' }}></Redirect>}></Route>
    )
  }
  return (
    <div className="App">
      {/* <Provider store={store}> */}
      <Router>
        <Suspense fallback={<div className="loadingdata">Loading...</div>}>
          <SecuredRoute component={Dashboard}></SecuredRoute>
          {authentication.isLoggedIn ? '' : <Route component={NotFound}></Route>}
        </Suspense>

      </Router>
      {/* <Router>
            <Switch>
              <Route exact path='/' component={Login}></Route>
              <Route exact path='/login' component={Login}></Route>
              <Route exact path ='/dashboard' component={Dashboard}></Route>
              <Route component={NotFound}></Route>
            </Switch>
          </Router> */}
      {/* </Provider> */}
    </div>
  );
}

export default App;
