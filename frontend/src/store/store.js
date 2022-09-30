import { legacy_createStore,applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import authReducer from "./auth/authReducer";

const rootReducer = combineReducers({
      auth:authReducer
});

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk));