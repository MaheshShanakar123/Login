import React from 'react'
import '../css/Wallet.css';
import { useSelector } from 'react-redux';

function All_Wallets() {
    const loginuser = useSelector(state => state.dashboardReducer);

    return (
        <div className="col-md-9">
            <div className="heading">All Wallets</div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Sl.No</th>
                        <th>Name</th>
                        <th>email</th>
                        <th>Phone</th>
                        <th>Gender</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {loginuser.user.map(data => (
                        <tr>
                            <td>{data.id}</td>
                            <td>{data.name}</td>
                            <td>{data.username}</td>
                            <td>{data.Phone}</td>
                            <td>{data.Gender}</td>
                            <td>₹ {data.Balance}</td>

                        </tr>

                    ))}

                </tbody>
            </table>
        </div>
    )
}

export default All_Wallets
