import React, { useState,useEffect } from 'react';
import loginAutheticatedPerson from '../Redux/Login/loginAction';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import './css/Login.css';
import { Alert } from 'bootstrap-4-react';

function Login() {
    var history = useHistory();
    var data;
    const [error, setError] = useState(false);
    const [formdata, setFormData] = useState({
        username: '',
        password: '',
    })
    const [loading, setLoading] = useState(false);
    
    const dispatch = useDispatch();

    const loginuser = useSelector(state => state.loginReducer);

    const updateuser = ()=>{
        data = loginuser;
       
        if (Object.keys(data.user).length === 0 && data.user.constructor === Object) {
            history.push("/login");
        }else if(Object.keys(data.user).length > 0 && data.user.constructor === Object){
            history.push("/dashboard");
        }

    }
    useEffect(() => {
       updateuser()
    }, [loginuser])

    const handleSubmit = async (e) => {
        setError(true);
        e.preventDefault();
        if (formdata.username !== '' && formdata.password !== '') {
            dispatch(loginAutheticatedPerson(formdata));            
        }
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000)
    }


    return (
        <div>
            <div>{loginuser.error !== '' ? <Alert className="alert alert-danger">{ }
                {loginuser.error}</Alert> : null}</div>
            <div className="login-wrap">
                <div className="login-html">
                    <input id="tab-1" type="radio" name="tab" className="sign-in" checked /><label htmlFor="tab-1" className="tab">Sign In</label>
                    <input id="tab-2" type="radio" name="tab" className="sign-up" /><label htmlFor="tab-2" className="tab"></label>
                    <div className="login-form">
                        <form onSubmit={handleSubmit}>
                            <div className="sign-in-htm">
                                <div className="group">
                                    <label htmlFor="email" className="label">UserName:</label>
                                    <input type="email" name="username" className="input" value={formdata.username} onChange={(e) => setFormData({ ...formdata, username: e.target.value })} autoComplete="off" />
                                    <div>{formdata.username.length == 0 && error ? <div className="alerttext">Please enter a Username</div> : null}</div>
                                </div>
                                <div className="group">
                                    <label htmlFor="password" className="label">Password:</label>
                                    <input type="password" name="password" className="input" value={formdata.password} onChange={(e) => setFormData({ ...formdata, password: e.target.value })} />
                                    <div>{formdata.password.length == 0 && error ? <div className="alerttext">Please enter a Password</div> : null}</div>
                                </div>
                                <div className="group">
                                    <button className="btn btn-primary button" id="login" disabled={!formdata.username || !formdata.password}>{loading ?
                                        <i className="fa fa-spinner fa-spin" style={{ fontSize: 24 }}></i>
                                        : null}
                                  Login</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
