import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import getAlltheDataFromUser from '../Redux/Dashboard/dashboardAction';
import FooterFile from './FooterFile';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { useLocation } from 'react-router-dom';

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
            {currentURL === '/dashboard' || !currentURL === '/login' || currentURL === '/balance' || currentURL === '/newwallet' || currentURL === '/addfunds' || currentURL === '/spend_funds'  ? <div><Navbar />
            <Sidebar /><FooterFile /></div>:''}
            {Object.keys(loginuser.user).length > 0 && loginuser.user.constructor === Object ? <div><Navbar />
            <Sidebar />
            <FooterFile />
            </div>: '' }
        </div>
    )
}

export default Dashboard
