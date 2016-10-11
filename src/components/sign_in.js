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
        <div className='panel panel-default col-xs-6' >
          <div className='panel-body'>
            <form onSubmit={this.newUserHandler.bind(this)}>
              <div className='form-group'>
                <label>Email: </label>
                <input className='form-control' ref='email' />
              </div>
              <div className='form-group'>
                <label>Password: </label>
                <input className='form-control' type='password' ref='password' />
              </div>
              <input type="submit" className='btn btn-default'/>
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

const componentCreator = connect(null, mapDispatchToProps)
export default componentCreator(SignIn);
