import { applyMiddleware, compose, createStore } from "redux";
import { MainReducer } from "./Services/index";
import { thunk } from "redux-thunk";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;;


 export const store = createStore(
    MainReducer,
    composeEnhancers(applyMiddleware(thunk))
 )