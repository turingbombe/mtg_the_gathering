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
        <div className='panel panel-default col-xs-6' >
          <div className='panel-body'>
            <form onSubmit={this.newUserHandler.bind(this)}>
              <div className='form-group'>
                <label>First Name: </label>
                <input className='form-control' ref='firstName' />
              </div>
              <div className='form-group'>
                <label>Last Name: </label>
                <input className='form-control' ref='lastName' />
              </div>
              <div className='form-group'>
                <label>Email: </label>
                <input className='form-control' ref='email' />
              </div>
              <div className='form-group'>
                <label>Password: </label>
                <input className='form-control' type= 'password' ref='password' />
              </div>
              <div className='form-group'>
                <label>Password Confirmation:</label>
                <input className='form-control' type='password' ref='passwordConfirmation' />
              </div>
              <input type="submit"/>
            </form>
          </div>  
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
