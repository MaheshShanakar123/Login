import React from 'react';
import '../css/Wallet.css';

function New_Wallets() {
    return (
        <div className="col-md-9">
            <div className="heading">Add a new user</div>
            <form>
                <div className="row form-group">
                <label htmlFor="name" className="col-md-4">Name</label>
                <input type="text" className="col-md-6 form-control" name="name" />
                </div>
                <div className="row form-group">
                <label htmlFor="phone" className="col-md-4">Phone</label>
                <input type="text" className="col-md-6 form-control" name="phone" />
                </div>
                <div className="row form-group">
                <label htmlFor="amount" className="col-md-4">Amount (Rs)</label>
                <input type="text" className="col-md-6 form-control" name="amount" />
                </div>
                <div className="row">
                <button type="submit" class="btn btn-primary offset-md-4 col-md-4">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default New_Wallets
