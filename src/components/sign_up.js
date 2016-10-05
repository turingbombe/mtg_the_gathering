import React from 'react'
import * as actions from '../actions/index'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

class SignUp extends React.Component {

  newUserHandler(event) {
    event.preventDefault()

    const userInfo = {first_name: this.refs.firstName.value, last_name: this.refs.lastName.value, email: this.refs.email.value, password: this.refs.password.value, password_confirmation: this.refs.passwordConfirmation.value}
    this.props.actions.newUser(userInfo)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.newUserHandler.bind(this)}>
          <label>First Name: </label>
          <input ref='firstName' />
          <label>Last Name: </label>
          <input ref='lastName' />
          <label>Email:: </label>
          <input ref='email' />
          <label>Password: </label>
          <input ref='password' />
          <label>Password Confirmation:</label>
          <input ref='passwordConfirmation' />
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

function mapStateToProps(state) {
  return {users: state.users}
}

const componentCreator = connect(null, mapDispatchToProps)
export default componentCreator(SignUp);
