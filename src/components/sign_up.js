import React from 'react'
import * as actions from '../actions/index'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

class SignUp extends React.Component {

  newUserHandler(event) {
    event.preventDefault()

    const userInfo = {first_name: this.refs.firstName.value, last_name: this.refs.lastName.value, email: this.refs.email.value, password: this.refs.password.value, password_confirmation: this.refs.passwordConfirmation.value}
    this.props.actions.newUser(userInfo).then(()=> this.props.actions.setUser({jwt:sessionStorage.jwt,user_id:sessionStorage.current_user})).then(()=> this.props.actions.getUserCollection(sessionStorage.current_user))
  }

  render() {
    return (
      <div>
        <div id='signup'>
        <form onSubmit={this.newUserHandler.bind(this)}>
          <label>First Name: </label>
          <div>
          <input ref='firstName' />
          </div>
          <label>Last Name: </label>
          <div>
          <input ref='lastName' />
          </div>
          <label>Email: </label>
          <div>
          <input ref='email' />
          </div>
          <label>Password: </label>
          <div>
          <input type= 'password' ref='password' />
          </div>
          <label>Password Confirmation:</label>
          <div>
          <input type='password' ref='passwordConfirmation' />
          </div>
          <input type="submit"/>
        </form>
        </div>
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
