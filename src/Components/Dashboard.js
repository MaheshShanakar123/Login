import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { employeeUsers } from '../Redux/Dashboard/dashboardAction';
import Navbar from './Navbar';

function Dashboard() {
    const dispatch = useDispatch();
    dispatch(employeeUsers())
    const loginuser = useSelector(state => state);
    
    return (
        <div>
            <Navbar />
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Sl.No</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>E-mail</th>
                        <th>Phone Number</th>
                    </tr>
                </thead>
                <tbody>
                    {loginuser.dashboardReducer.user.user.map(employees => (
                        <tr key={employees.id}>
                            <td>{employees.id}</td>
                            <td>{employees.name}</td>
                            <td>{employees.age}</td>
                            <td>{employees.gender}</td>
                            <td>{employees.email}</td>
                            <td>{employees.phoneNo}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Dashboard
