import { Fetch_Users, Fetch_Users_Success } from "./dasboardType";

const initialState = {
    loading: false,
    user: [],
    error: ''
}

const dashboardReducer = (state = initialState, action) => {
    switch (action.type) {
        case Fetch_Users:
            return {
                ...state,
                loading: true,
                error: null
            };
        case Fetch_Users_Success:
            return {
                loading: true,
                user: action.payload,
                error: ''
            }
        default:
            return state;
    }
}

export default dashboardReducer;