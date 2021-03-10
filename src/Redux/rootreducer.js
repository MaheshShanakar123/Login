
import { combineReducers } from 'redux';
import loginReducer from '../Redux/Login/loginReducer';
import dashboardReducer from '../Redux/Dashboard/dashboardReducer';

const rootReducer = combineReducers({
    loginReducer,
    dashboardReducer
})

export default rootReducer;