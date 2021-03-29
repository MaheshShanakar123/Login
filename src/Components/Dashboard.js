import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import getAlltheDataFromUser from '../Redux/Dashboard/dashboardAction';
// import FooterFile from './FooterFile';
// import Navbar from './Navbar';
// import Sidebar from './Sidebar';
import { useLocation } from 'react-router-dom';
import { Suspense, lazy } from 'react';

const Navbar = React.lazy(() => import('./Navbar'));
const Sidebar = React.lazy(() => import('./Sidebar'));
const FooterFile = React.lazy(() => import('./FooterFile'));

function Dashboard() {

    const loginuser = useSelector(state => state.loginReducer);
    console.log(loginuser);
    console.log(Object.keys(loginuser.user).length === 0 && loginuser.user.constructor === Object)
    const currentURL = window.location.pathname;
    console.log(currentURL);

    const dispatch = useDispatch();
    dispatch(getAlltheDataFromUser());
    
    return (
        <div>
            <Suspense fallback={<div className="loadingdata">Loading...</div>}>
            {currentURL === '/dashboard' || !currentURL === '/login' || currentURL === '/balance' || currentURL === '/newwallet' || currentURL === '/addfunds' || currentURL === '/spend_funds'  ? <div><Navbar />
            <Sidebar /><FooterFile /></div>:''}
            {Object.keys(loginuser.user).length > 0 && loginuser.user.constructor === Object ? <div><Navbar />
            <Sidebar />
            <FooterFile />
            </div>: '' }
            </Suspense>
        </div>
    )
}

export default Dashboard
