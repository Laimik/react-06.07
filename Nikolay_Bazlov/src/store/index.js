import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers";
import logger from "redux-logger"

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(logger),
);

const store = createStore(rootReducer, enhancer);

export default store;