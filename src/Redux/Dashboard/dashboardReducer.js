import { Fetch_Employee, Fetch_Employee_Success } from "./dasboardType";

const initialState = {
    loading: false,
    empoyee: [],
    error: ''
}

const dashboardReducer = (state = initialState, action) => {
    switch (action.type) {
        case Fetch_Employee:
            return {
                ...state,
                loading: true,
                error: null
            };
        case Fetch_Employee_Success:
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