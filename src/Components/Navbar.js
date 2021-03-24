import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import logout from '../Redux/Login/loginAction';
import './css/footer.css';

function Navbar() {
    const loginuser = useSelector(state => state.loginReducer);
    const dispatch = useDispatch();
    console.log(loginuser);

    const logOut = () => {
        // dispatch(logout());
    }
    return (
        <div>
            <nav className="navbar navbar-expand-md">
                <div className="navbar-brand">Wallet</div>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div class="nav-item dropdown ml-auto">
                    <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown" style={{ color: 'black' }}>
                        {loginuser.user.name}
                    </a>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" onClick={logOut}>Logout</a>
                    </div>
                </div>
                <a className="nav-item nav-link"></a>
            </nav>


        </div>
    )
}

export default React.memo(Navbar)
