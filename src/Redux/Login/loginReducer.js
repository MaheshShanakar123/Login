import { LOGIN_FAILURE, LOGIN_USER, FETCH_USER } from "./loginType";

const initialState = {
    loading: false,
    user: {},
    error: ''
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER:
            return {
                ...state,
                loading: true,
                error: null
            };
        case LOGIN_USER:
            return {
                ...state,
                loading: true,
                user: action.payload,
                error: ''
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                loading: true,
                user: '',
                error: action.payload
            }
    }
    return state;

}

export default loginReducer;