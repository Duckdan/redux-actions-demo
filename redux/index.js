import { createStore, applyMiddleware, combineReducers,compose } from 'redux'
import thunk from 'redux-thunk'
import { countReducer } from './count'
import { personReducer } from './person'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(combineReducers({
    count: countReducer,
    persons: personReducer
}), composeEnhancers(applyMiddleware(thunk)))