import logo from './logo.svg';
import './App.css';
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

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Router>
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
