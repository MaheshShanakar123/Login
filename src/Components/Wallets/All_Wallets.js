import React from 'react'
import '../css/Wallet.css';
import { useSelector } from 'react-redux';

function All_Wallets() {
    const loginuser = useSelector(state => state);
    console.log(loginuser);
    return (
        <div className="col-md-9">
            <div className="heading">All_Wallets</div>
        </div>
    )
}

export default All_Wallets
