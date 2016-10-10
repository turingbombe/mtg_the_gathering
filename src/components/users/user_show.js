import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

class UserShow extends React.Component {
  // {this.props.collection.decks ? this.props.collection.decks.map(deck => <li><Link to={`this.props.collection.deck`}>{this.props.collection.deck.name}</Link></li>): <li>You Need to Create a Deck!</li>}
  render(){
    return (
      <div>
        <h1>Welcome to The Gathering, {this.props.user.first_name}</h1>
        <div className='panel panel-default col-md-4' >
          <div className='panel-heading'>Your Collection & Decks</div>
          <div className='panel-body' id="sets_index">

            <ul>
              <li><Link to={`/collections/${this.props.collection.id}`}>Your Collection</Link></li>
                           
            </ul>
              
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
    console.log("mstp",state)
	if (state.users.length > 0 ){
		const user = state.users.find(u => {
        console.log("mstp users:", u)
        return u.id == ownProps.params.id
      })
    const collection = state.collections.find(c =>{
      console.log("mstp collection:", c)
      console.log("mstp collection id:", c.user_id)
      return c.user_id == ownProps.params.id
    })
		return {user:user, collection: collection}
	}else{
		return {user:{name: 'david'}}
	}
}


const componentCreator = connect(mapStateToProps)
export default componentCreator(UserShow);
