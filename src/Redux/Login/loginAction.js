import { LOGIN_FAILURE, LOGIN_USER, FETCH_USER } from "./loginType";

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
    return (dispatch) => {
        dispatch(fetchuserrequest());
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };
        fetch('http://localhost:3000/login', requestOptions)
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