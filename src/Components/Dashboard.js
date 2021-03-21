import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import getAlltheDataFromUser from '../Redux/Dashboard/dashboardAction';
import Sidebar from './Sidebar';

function Dashboard() {

    const loginuser = useSelector(state => state.loginReducer);
    console.log(loginuser);

    const dispatch = useDispatch();
    dispatch(getAlltheDataFromUser());
    
    return (
        <div>
            <Sidebar />

            {/* <table className="table table-striped">
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>E-mail</th>
                        <th>Balance</th>
                    </tr>
                </thead>
                {/* <tbody>
                    {loginuser.dashboardReducer.user.map(employees => {
                        console.log(employees);
                    }
                    //     <div>
                    // {employees[0].map(user => 
                    // (
                    //     <tr key={user.id}>
                    //          <td>{user.id}</td>
                    //          <td>{user.name}</td>
                    //          <td>{user.Phone}</td>
                    //          <td>{user.username}</td>
                    //          <td>{user.Balance}</td>
                    //      </tr>
                    // ))
                    // }
                    //     </div>
                        // <tr key={employees.id}>
                        //     <td>{employees.id}</td>
                        //     <td>{employees.name}</td>
                        //     <td>{employees.Phone}</td>
                        //     <td>{employees.username}</td>
                        //     <td>{employees.Balance}</td>
                        // </tr>
                    )}
                </tbody> */}
            {/* </table> */} 
        </div>
    )
}

export default Dashboard
