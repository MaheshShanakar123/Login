import { LOGIN_FAILURE, LOGIN_USER, FETCH_USER } from "./loginType";
import {myConfig} from '../../config.js';

export const fetchuserrequest = () => {
    return {
        type: FETCH_USER,
    }
}

export const loginuser = (user) => {
    return {
        type: LOGIN_USER,
        payload: user
    }
}

export const loginfailure = (error) => {
    console.log(error);
    return {
        type: LOGIN_FAILURE,
        payload: error
    }
}

const loginAutheticatedPerson = (data) => {
    console.log("cdw",`${myConfig.apiUrl}/login`);
    const baseUrl = process.env.REACT_APP_URL
    console.log("baseurl", baseUrl)
    return (dispatch) => {
        dispatch(fetchuserrequest());
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };
        fetch(`${myConfig.apiUrl}/login`, requestOptions)
            .then(response => response.json())
            .then(json => {
                var obj;
                var error = "Credential is incorrect"
                if (obj = json.find(logindata => logindata.username === data.username && logindata.password === data.password)) {
                    dispatch(loginuser(obj));
                } else if (json.find(logindata => logindata.username !== data.username || logindata.password === data.password)) {
                    dispatch(loginfailure(error));
                }
            })
    }
}

export default loginAutheticatedPerson;