import React from 'react'
import * as actions from '../actions/index'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class SignIn extends React.Component {

  newUserHandler(event) {
    event.preventDefault()
    const userInfo = {email: this.refs.email.value, password: this.refs.password.value}
    this.props.actions.signIn(userInfo)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.newUserHandler.bind(this)}>
          <label>Email: </label>
          <input ref='email' />
          <label>Password: </label>
          <input type='password' ref='password' />
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

const componentCreator = connect(null, mapDispatchToProps)
export default componentCreator(SignIn);
