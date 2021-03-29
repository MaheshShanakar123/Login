import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import '../css/Wallet.css';
import All_Transactions from './All_Transactions';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom';

function Spend_Funds() {
    const [transcationLists, settranscationLists] = useState([])
    const userData = useSelector(state => state);
    var toDropdown = userData.dashboardReducer.user.filter((data) => {
        return data.name != userData.loginReducer.user.name
    })


    console.log(toDropdown);
    console.log(userData);
    const [transferamount, settransferamount] = useState({
        id: '',
        from: userData.loginReducer.user.id,
        to: '',
        amount: 0
    })
    console.log(transferamount);

    var finduser = toDropdown.find((data) => {
        return data.id === parseInt(transferamount.to);
    })
    console.log(finduser);

    const [updatedata, setupdatedata] = useState({
        id: '',
        username: '',
        password: '',
        name: '',
        Phone: '',
        Gender: '',
        Balance: 0
    })



    const handleSubmit = (event) => {
        event.preventDefault();
        setupdatedata({
            id: finduser.id,
            username: finduser.username,
            password: finduser.password,
            name: finduser.name,
            Phone: finduser.Phone,
            Gender: finduser.Gender,
            Balance: finduser.Balance + parseInt(transferamount.amount)
        })
        console.log(updatedata);
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedata)
        };
        fetch('http://localhost:3000/login/' + finduser.id, requestOptions)
            .then(response => response.json())
            .then(json => console.log(json))
        console.log(typeof transcationLists)

        settranscationLists([...transcationLists, {
            user: userData.loginReducer.user.name,
            to: finduser.name,
            amount: transferamount.amount
        }])
    }
    console.log(transcationLists);
    return (
        <div className="col-md-9">
            <div className="heading">Send Amount</div>
            <form onSubmit={handleSubmit}>
                <div className="row form-group">
                    <label htmlFor="name" className="col-md-4">From:</label>
                    <input type="text" className="col-md-6 form-control" value={userData.loginReducer.user.name} name="name" readOnly />
                </div>

                <div className="row form-group">
                    <label htmlFor="users" className="col-md-4">To:</label>
                    <select className="col-md-6 form-control" id="users" name="userList" onChange={(e) => settransferamount({ ...transferamount, to: e.target.value, id: 3 })} placeholder="Select Name">
                        <option class="dropdown-item" disabled selected value="undefined">-- Select a Name --</option>
                        {toDropdown.map(user => (
                            <option value={user.id}>{user.name}</option>
                        ))}
                    </select>
                </div>

                <div className="row form-group">
                    <label htmlFor="amount" className="col-md-4">Amount:</label>
                    <input type="text" className="col-md-6 form-control" name="amount" onChange={(e) => settransferamount({ ...transferamount, amount: e.target.value })} autoComplete="off" />
                </div>

                <div className="row">
                    <button type="submit" class="btn btn-primary offset-md-7 col-md-2" disabled={!transferamount.from || !transferamount.to || !transferamount.amount}>Submit</button>
                    <Link className="col-md-3" to={{
                        pathname: "/alltranscations",
                        state: {
                            infoId: transcationLists,
                        },
                    }}
                    ><button type="submit" class="btn btn-danger">Go To All Transactions >>></button></Link>
                </div>

            </form>
        </div>
    )
}

export default Spend_Funds
