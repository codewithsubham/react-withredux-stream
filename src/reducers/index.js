import { combineReducers } from "redux";
import authReducers from "./authReducers";
import streamReducer from "./streamReducer";
import { reducer as formReducer } from "redux-form";



export default combineReducers({
    auth: authReducers,
    form: formReducer,
    streams: streamReducer
})
