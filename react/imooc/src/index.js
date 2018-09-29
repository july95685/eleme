import React from 'react'
import ReactDom from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import App from './App'
import { Provider } from 'react-redux'
import { counter } from './index.redux'

const store = createStore(counter, applyMiddleware(thunk))
console.log(store.getState())
ReactDom.render(
    <Provider store = {store} >
        <App  />
    </Provider>,
    document.getElementById('root')
)
