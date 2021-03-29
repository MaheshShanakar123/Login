import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';
import Login from './Components/Login';
import { Provider } from 'react-redux';
import store from './Redux/store';
import Dashboard from './Components/Dashboard';
import NotFound from './Components/NotFound';
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    <Router>
            <Switch>
              <Route exact path='/' component={Login}></Route>
              <Route exact path='/login' component={Login}></Route>
              {/* <Route component={NotFound}></Route> */}
              {/* <Route exact path ='/dashboard' component={Dashboard}></Route> */}
            </Switch>
          </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
