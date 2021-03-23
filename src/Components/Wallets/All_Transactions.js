import React from 'react'
import '../css/Wallet.css';

function All_Transactions({location}) {
    console.log(location);
    return (
        <div className="col-md-9">
            <div className="heading">All Transactions</div>
            <table class="table">
    <thead>
      <tr>
        <th>From</th>
        <th>To</th>
        <th>Amount Transferd</th>
      </tr>
    </thead>
    <tbody>
          {location.state.infoId.map(data => (
                    <tr>
            <td>{data.user}</td>
            <td>{data.to}</td>
            <td>{data.amount}</td> 
              </tr>
            
          ))}
      
    </tbody>
  </table>
        </div>
    )
}

export default All_Transactions
