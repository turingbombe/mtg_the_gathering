import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

class UserShow extends React.Component {
  constructor(){
    super()

  }

  render(){
    return (
      <div>
        <div className='panel panel-default col-md-4' >
          <div className='panel-heading'>Your Collection & Decks</div>
          <div className='panel-body' id="sets_index">
            <Link to={`/collections/${this.props.collection.id}`}> Your Collection </Link>
          </div>
        </div>
        <div className='col-md-8'>
          {this.props.children}
        </div>
      </div>
    )
  }
}


function mapStateToProps(state, ownProps){
	if (state.users.length > 0 &&  state.collections.find(c =>{ return c.user_id == ownProps.params.id})){
		const user = state.users.find(u => {
        return u.id == ownProps.params.id
      })
    const collection = state.collections.find(c =>{
      return c.user_id == ownProps.params.id
    })
    console.log("mstp final:", collection)
		return {user:user, collection: collection}
	}else{
		return {user:{first_name: "Loading...."}, collection:{id:'temp', decks: [{id: 1,name: 'Loading....'}]}}
	}
}


const componentCreator = connect(mapStateToProps)
export default componentCreator(UserShow);
