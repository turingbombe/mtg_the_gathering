import React from 'react'
import * as actions from '../actions/index'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class SignIn extends React.Component {

  newUserHandler(event) {
    event.preventDefault()
    const userInfo = {email: this.refs.email.value, password: this.refs.password.value}
    this.props.actions.signIn(userInfo).then(() => this.props.actions.getUserCollection(sessionStorage.current_user))
  }

  render() {
    return (
      <div>
        <div id='signin_form'>
          <form onSubmit={this.newUserHandler.bind(this)}>
            <label>Email: </label>
            <div>
            <input ref='email' />
            </div>
            <label>Password: </label>
            <div>
            <input type='password' ref='password' />
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

const componentCreator = connect(null, mapDispatchToProps)
export default componentCreator(SignIn);
