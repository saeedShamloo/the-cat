import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import cats from "./modules/cats";

const reducer = combineReducers({ cats });
const configureStore = () => createStore(reducer, applyMiddleware(thunk));

export default configureStore;
