import { applyMiddleware, legacy_createStore } from "redux";
import thunk from "redux-thunk"
import {reduser} from "./reduser"
export const store=legacy_createStore(reduser,applyMiddleware(thunk))
console.log(store)