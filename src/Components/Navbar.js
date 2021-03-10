import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

function Navbar() {
    const loginuser = useSelector(state => state.loginReducer);
    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-light bg-light">
                <a href="#" className="navbar-brand">Brand</a>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav">
                        <a href="#" className="nav-item nav-link active">Home</a>
                        <a href="#" className="nav-item nav-link">Profile</a>
                        <a href="#" className="nav-item nav-link">Messages</a>
                        <a href="#" className="nav-item nav-link disabled" tabindex="-1">Reports</a>
                    </div>
                    <div className="navbar-nav ml-auto">
                        <a className="nav-item nav-link">{loginuser.user !== undefined ? <div>{loginuser.user.username}</div> : <div>Login</div>}</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
