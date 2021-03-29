import React, { useReducer, useRef, useState } from 'react';
import '../css/Wallet.css';

function New_Wallets() {
    const inputRef = useRef();
    const [formdata, setformdata] = useState({
        name: "",
        username: "",
        password: "",
        Phone: "",
        Gender: "",
        Balance: parseInt(0),
    })
    console.log(formdata);
    const initialFormState = {
        loading: false,
        user: [],
        error: ''
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case 'Submitdata':
                return {
                    ...state,
                    loading: true,
                    user: action.payload,
                    error: ''
                };
            default: return state;
        }
    };


    const [state, dispatch] = useReducer(reducer, initialFormState);

    if (state.loading === true) {
        var success = <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
            <circle className="path circle" fill="none" stroke="#73AF55" stroke-width="6" stroke-miterlimit="10" cx="65.1" cy="65.1" r="62.1" />
            <polyline className="path check" fill="none" stroke="#73AF55" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5 " /></svg>

        setTimeout(() => {
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
                <circle className="path circle" fill="none" stroke="#73AF55" stroke-width="6" stroke-miterlimit="10" cx="65.1" cy="65.1" r="62.1" />
                <polyline className="path check" fill="none" stroke="#73AF55" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5 " /></svg>
        }, 1000)
    }
    var handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: 'Submitdata' })

        const requestOptions = {
            method: 'Post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formdata)
        };
        fetch('http://localhost:3000/login', requestOptions)
            .then(response => response.json())
            .then(json => dispatch({ type: 'Submitdata', payload: json }));
        setformdata({
            name: "",
            username: "",
            password: "",
            Phone: "",
            Gender: "",
            Balance: parseInt(0),
        })
    }
    console.log(state);
    return (
        <div className="col-md-9">
            <div className="heading">Add a new user</div>
            <form onSubmit={handleSubmit}>
                <div className="row form-group">
                    <label htmlFor="name" className="col-md-4">Name</label>
                    <input type="text" className="col-md-6 form-control" name="name" onChange={(e) => setformdata({ ...formdata, name: e.target.value })} placeholder="Enter a Name" />
                </div>
                <div className="row form-group">
                    <label htmlFor="email" className="col-md-4">Email</label>
                    <input type="email" className="col-md-6 form-control" name="email" onChange={(e) => setformdata({ ...formdata, username: e.target.value })} placeholder="Enter a Email" />
                </div>
                <div className="row form-group">
                    <label htmlFor="password" className="col-md-4">Password</label>
                    <input type="password" className="col-md-6 form-control" name="password" onChange={(e) => setformdata({ ...formdata, password: e.target.value })} placeholder="Enter a Password" />
                </div>
                <div className="row form-group">
                    <label htmlFor="phone" className="col-md-4">Phone</label>
                    <input type="text" className="col-md-6 form-control" name="phone" onChange={(e) => setformdata({ ...formdata, Phone: e.target.value })} placeholder="Enter a Phone" />
                </div>
                <div className="row form-group">
                    <label htmlFor="gender" className="col-md-4">Gender</label>
                    <select className="col-md-6 form-control" id="gender" name="gender" onChange={(e) => setformdata({ ...formdata, Gender: e.target.value })}>
                    <option class="dropdown-item" disabled selected value="undefined">-- Select a Gender --</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className="row form-group">
                    <label htmlFor="amount" className="col-md-4">Amount (Rs)</label>
                    <input type="text" className="col-md-6 form-control" name="amount" onChange={(e) => setformdata({ ...formdata, Balance: parseInt(e.target.value) })} placeholder="Enter a Amount" />
                </div>
                <div className="row">
                    <button type="submit" className="btn btn-primary offset-md-10 col-md-2" data-toggle="modal" data-target="#myModal" disabled={!formdata.password ||
                        !formdata.name ||
                        !formdata.username ||
                        !formdata.Phone ||
                        !formdata.Gender ||
                        !formdata.Balance || formdata.Balance < 500} >Submit</button>
                </div>
            </form>

            <div className="modal" id="myModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="row form-group">
                            <div className="row">
                                <div className="col-md-4">
                                    {success}
                                </div>
                            </div>
                        </div>
                        <div className="modal-body">
                            <h4>New Account Added Successfully</h4>
                            <div className="row">
                                <button type="button" class="btn btn-danger col-md-2" data-dismiss="modal">Close</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default New_Wallets
