import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware, combineReducers} from 'redux'
import {Provider} from 'react-redux'
import logger from 'redux-logger'
import { reducer as formReducer } from 'redux-form'

import SignInForm from './form'

// begin form page definition
class SignInPage extends Component {
    onSubmit(values) {
        console.log('*** FORM SUBMIT ***')
        console.log(values)
    }

    render() {
        return <SignInForm onSubmit={this.onSubmit} />
    }
}
// end form page definition

// define form reducer
const reducers = combineReducers({
    form: formReducer
})

// define middleware **OPTIONAL**
const middlewares = applyMiddleware(logger)

// define store
const store = createStore(reducers, middlewares)

ReactDOM.render(
    <Provider store={store}>
        <SignInPage />
    </Provider>,
    document.getElementById('root'));
