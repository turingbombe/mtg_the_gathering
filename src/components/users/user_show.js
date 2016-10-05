import React from 'react';
import {connect} from 'react-redux';

class UserShow extends React.Component {
  render(){
    return (
      <div>
        {this.props.user.first_name}
        {this.props.user.last_name}
        {this.props.user.email} 
      </div>
    )
  }
}

function mapStateToProps(state, ownProps){
	if (state.users.length > 0){
		const user= state.users.find(user => {return user.id == ownProps.params.id})
		return {user: user}
	}else{
		return {user:{name: 'david'}}
	}
}


const componentCreator = connect(mapStateToProps)
export default componentCreator(UserShow);
