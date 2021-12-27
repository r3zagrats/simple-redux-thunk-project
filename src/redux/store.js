import rootReducer from "./reducers";
import middleware from "./middleware";
import { createStore, applyMiddleware } from "redux";

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
