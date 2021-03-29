import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
} from 'react-router-dom';
import Dashboard from './Dashboard';
import Login from './Login';
import Sidebar from './Sidebar';
import Add_Funds from './Wallets/Add_Funds';
import All_Transactions from './Wallets/All_Transactions';
import All_Wallets from './Wallets/All_Wallets';

function Routes() {
    return (
        <div>
            <Router>
                <Switch>
                    {/* <Route exact path='/' component={Login}></Route>
                    <Route exact path='/login' component={Login}></Route> */}
                    {/* <Route exact path='/dashboard' component={Dashboard}> */}
                        <Route exact path='/addfunds' component={Add_Funds}></Route>
                        <Route exact path='/alltranscations' component={All_Transactions}></Route>
                        <Route exact path="/allwallets" component={All_Wallets}></Route>
                    {/* </Route> */}
                    {/* <Sidebar>
                        <Route component={({ match }) =>
                            <div>
                                <Route exact path='/addfunds' component={Add_Funds}></Route>
                                <Route exact path='/alltranscations' component={All_Transactions}></Route>
                                <Route exact path="/allwallets" component={All_Wallets}></Route>
                            </div>
                        } />
                    </Sidebar> */}
                    {/* <Route exact path='/balance' component={Check_Balance}></Route>
                    <Route exact path='/newwallet' component={New_Wallets}></Route>
                    <Route exact path='/spend_funds' component={Spend_Funds}></Route> */}
                </Switch>
            </Router>
        </div>
    )
}

export default Routes
