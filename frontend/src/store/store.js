import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import authReducer from "./auth/authReducer";
import { todosReducer } from "./todos/todosReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  todos: todosReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
