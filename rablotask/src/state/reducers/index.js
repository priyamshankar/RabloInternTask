import {combineReducers} from "redux";
import amountReducer from "./amountReducer";

const reducers = combineReducers({
    add : amountReducer,
})

export default reducers;