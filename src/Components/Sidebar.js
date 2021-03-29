import React from 'react';
import './css/Sidebar.css';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
} from 'react-router-dom';
import Add_Funds from './Wallets/Add_Funds';
import All_Transactions from './Wallets/All_Transactions';
import All_Wallets from './Wallets/All_Wallets';
import Check_Balance from './Wallets/Check_Balance';
import New_Wallets from './Wallets/New_Wallets';
import Spend_Funds from './Wallets/Spend_Funds';
import $ from "jquery";
import { useSelector } from 'react-redux';
import Navbar from './Navbar';
import { Suspense, lazy } from 'react';
import NotFound from './NotFound';
import Dashboard from './Dashboard';
import Routes from './Routes';
import Login from './Login';

// const Add_Funds = React.lazy(() => import('./Wallets/Add_Funds'));
// const All_Transactions = React.lazy(() => import('./Wallets/Add_Funds'));
// const All_Wallets = React.lazy(() => import('./Wallets/Add_Funds'));
// const Check_Balance = React.lazy(() => import('./Wallets/Add_Funds'));
// const New_Wallets = React.lazy(() => import('./Wallets/Add_Funds'));
// const Spend_Funds = React.lazy(() => import('./Wallets/Add_Funds'));

function Sidebar(props) {
    const loginuser = useSelector(state => state.loginReducer);
    console.log(loginuser.isLoggedIn)

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
                <Redirect to={{ pathname: '/login' }}></Redirect>}>
            </Route>
        )
    }
    $(function () {
        $("li").click(function () {
            // remove classes from all
            $("li").removeClass("active");
            // add class to the one we clicked
            $(this).addClass("active");
        });
    });
    return (
        <div className="container-fluid">
            { props.children }
            <Router>
                <div className="row sidebar">
                    <ul class="col-md-3">
                        {loginuser.user.role == 'admin' ? <Link to="/allwallets"><li>All Wallets</li></Link> : ''}
                        <Link to='/newwallet'><li>New Wallet</li></Link>
                        <Link to='/balance'><li>Check Balance</li></Link>
                        <Link to='/addfunds'><li>Add to Wallet</li></Link>
                        <Link to='/spend_funds'><li>Send Amount</li></Link>
                    </ul>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Switch>
                            <Route exact path='/addfunds' component={Add_Funds}></Route>
                            <Route exact path='/alltranscations' component={All_Transactions}></Route>
                            <Route exact path="/allwallets" component={All_Wallets}></Route>
                            <Route exact path='/balance' component={Check_Balance}></Route>
                            <Route exact path='/newwallet' component={New_Wallets}></Route>
                            <Route exact path='/spend_funds' component={Spend_Funds}></Route>
                        </Switch>
                    </Suspense>

                </div>
            </Router>

        </div>
    )
}


export default Sidebar
