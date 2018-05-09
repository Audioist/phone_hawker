import {compose, createStore, applyMiddleware} from 'redux';
import {browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import { createLogger } from 'redux-logger';
import rootReducer from './state/state';


const middleware = [
    createLogger()
];

const enhancers = compose(
    applyMiddleware(...middleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
);

// Create Store
const store = createStore(
    rootReducer,
    {},
    enhancers
);

store.subscribe(()=>{
    console.log("store changed", store.getState())
})

// store.dispatch({type: "CHANGE_MODEL", payload: "iPhone 8"});
// store.dispatch({type: "CHANGE_PROVIDER", payload: "AT&T"});
// store.dispatch({type: "CHANGE_CONDITION", payload: "Damaged"});

export const history = syncHistoryWithStore(browserHistory, store);

export {store};