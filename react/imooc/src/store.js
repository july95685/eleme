import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

export default (initState = {}) => {
    let store = {}
    
    store = createStore(rootReducer, initState, compose(
        applyMiddleware(thunk)
    ))

	return store
}