import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

// begin form definition
class SignInForm extends Component {
    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                Username: <Field name='username' component='input' type="text" /><br />
                Password: <Field name='password' component='input' type="password" /><br />
                <button type="submit">Submit</button>
            </form>
        )
    }
}

// connect redux-form to the form
export default reduxForm({
    form: 'sign-in'
})(SignInForm)
// end form definition