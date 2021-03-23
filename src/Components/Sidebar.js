import React from 'react';
import './css/Sidebar.css';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom';
import Add_Funds from './Wallets/Add_Funds';
import All_Transactions from './Wallets/All_Transactions';
import All_Wallets from './Wallets/All_Wallets';
import Check_Balance from './Wallets/Check_Balance';
import New_Wallets from './Wallets/New_Wallets';
import Spend_Funds from './Wallets/Spend_Funds';
import $ from "jquery";

function Sidebar() {
    $(function() {
        $("li").click(function() {
           // remove classes from all
           $("li").removeClass("active");
           // add class to the one we clicked
           $(this).addClass("active");
        });
     });
    return (
        <div className="container-fluid">
            <Router>
                <div className="row">
            <ul class="col-md-3">
            <Link to="/allwallets"><li>All Wallets</li></Link>
            <Link to='/newwallet'><li>New Wallet</li></Link>
            <Link to='/balance'><li>Check Balance</li></Link>
            <Link to='/addfunds'><li>Add to Wallet</li></Link>
            <Link to='/spend_funds'><li>Spend Funds</li></Link>
            {/* <Link to='/alltranscations'><li>All Transactions</li></Link> */}
            </ul>
            <Switch>

            <Route exact path='/addfunds' component={Add_Funds}></Route>
            <Route exact path='/alltranscations' component={All_Transactions}></Route>
            <Route exact path="/allwallets" component={All_Wallets}></Route>
            <Route exact path='/balance' component={Check_Balance}></Route>
            <Route exact path='/newwallet' component={New_Wallets}></Route>
            <Route exact path='/spend_funds' component={Spend_Funds}></Route>

          </Switch>
            </div>
            </Router>
            
        </div>
    )
}

export default Sidebar
