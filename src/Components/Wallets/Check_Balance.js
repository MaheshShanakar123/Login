import React, { useState } from 'react';
import '../css/Wallet.css';
import { useSelector } from 'react-redux';
import $ from "jquery";

function Check_Balance() {
    var [loading, setLoading] = useState(false);
    const [amount, setamount] = useState(false);
    const [password, setpassword] = useState('');
    const userData = useSelector(state => state.loginReducer);
    console.log(userData);

    $(function () {
        $(".server").click(function () {
            $("input").addClass("none");
        });
    });
    const balance = () => {
        setamount(false);
        setLoading(false);
        $(function () {
            $(".balancebutton").click(function () {
                $("input").removeClass("none");
            });
        });
    }
    const getBalance = (amount) => {
        setLoading(true);
        if (userData.user.password == password) {
            setTimeout(() => {
                setLoading(false);
                setamount(true);
            }, 5000)
        } else {
            console.log('failure');
        }
        setpassword('')
    }
    return (
        <div className="col-md-9">
            <div className="heading">Check Balance</div>
            <div className="completeData">
                <label htmlFor="name">Name:</label>
                {userData.user.name}
            </div>
            <div className="row getButton">
                <button type="submit" className="btn btn-primary offset-md-4 col-md-4 balancebutton" data-toggle="modal" data-target="#myModal" onClick={balance}>Get Balance</button>
            </div>

            <div className="modal" id="myModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="row form-group">
                            <div className="row">
                                <div className="col-md-4">
                                    {amount ? <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
                                        <circle className="path circle" fill="none" stroke="#73AF55" stroke-width="6" stroke-miterlimit="10" cx="65.1" cy="65.1" r="62.1" />
                                        <polyline className="path check" fill="none" stroke="#73AF55" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5 " />
                                    </svg> : ''}
                                </div>
                            </div>
                            <h6>{loading ? <div className="serverData">Getting Response from the Server</div> : ''}</h6>
                            {amount ? <h3 className="col-md-4 balance">₹ {userData.user.Balance}</h3> :
                                <input type="password" className="col-md-6 form-control text" name="password" placeholder="Password" value={password} onChange={(e) => setpassword(e.target.value)} />
                            }
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                {amount ? '' : <button type="submit" className="btn btn-primary offset-md-3 col-md-4 server" disabled={!password} onClick={() => getBalance(userData.user.Balance)}>Get Balance</button>}
                                <button type="button" className="btn btn-danger col-md-2" data-dismiss="modal">Close</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Check_Balance
