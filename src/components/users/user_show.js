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
          <ul>
            <li><Link to={`/users/${this.props.collection.id}/decks/new`}> Create A New Deck </Link></li>
            <li><Link to={`users/${this.props.collection.id}/collections/${this.props.collection.id}`}> Your Collection </Link></li>
            {this.props.decks.map(deck => <li> <Link to={`/users/${this.props.collection.user_id}/decks/${deck.id}`}>{deck.name}</Link></li>)}
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
	if (state.users.length > 0 &&  state.collections.find(c =>{ return c.user_id == ownProps.params.id})){
		const user = state.users.find(u => {
        return u.id == ownProps.params.id
      })
    const collection = state.collections.find(c =>{
      return c.user_id == ownProps.params.id
    })
    const decks_match = state.decks.filter(deck => deck.collection_id == collection.id)
    console.log("mstp final:", collection, "decks", decks_match)
		return {user:user, collection: collection, decks: decks_match}
	}else{
		return {collection: {"id":2,"name":"Gathering Charlie","card_ids":[2312,2313],"user_id":2,"decks":[{"id":2,"name":"Your first deck","description":"An empty deck to get you started!","card_ids":[],"collection_id":2}],"cards":[{"id":2312,"cmc":6,"colors":["Blue"],"flavor":"\"When one has witnessed the unspeakable, 'tis sometimes better to forget.\" —Vervamon the Elder","image_url":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=1746\u0026type=card","mana_cost":["3","U","U","U"],"name":"Amnesia","original_text":"Look at target player's hand. Target player discards all non-land cards in his or her hand.","original_type":null,"power":null,"rarity":"Uncommon","set_name":null,"card_text":"Target player reveals his or her hand and discards all nonland cards.","toughness":null,"card_type":null,"card_set_id":10},{"id":2313,"cmc":4,"colors":["White"],"flavor":null,"image_url":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=1801\u0026type=card","mana_cost":["2","W","W"],"name":"Angry Mob","original_text":"Trample\nDuring your turn, the *s below are both equal to the total number of swamps all opponents control. During any other player's turn, * equals 0.","original_type":null,"power":"2+*","rarity":"Uncommon","set_name":null,"card_text":"Trample\nAs long as it's your turn, Angry Mob's power and toughness are each equal to 2 plus the number of Swamps your opponents control. As long as it's not your turn, Angry Mob's power and toughness are each 2.","toughness":"2+*","card_type":null,"card_set_id":10}]},decks: [{name:"Loading", id:2}]}
	}
}


const componentCreator = connect(mapStateToProps)
export default componentCreator(UserShow);
