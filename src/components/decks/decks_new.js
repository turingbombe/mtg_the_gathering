import React from 'react'
import * as actions from '../../actions/index'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


class DeckNew extends React.Component{
	constructor(){
		super()
		this.newDeckHandler = this.newDeckHandler.bind(this)
	}

	newDeckHandler(event){
		event.preventDefault()
		let newDeck = {name: this.refs.deckName.value, description: this.refs.deckDesc.value}
		this.props.actions.createDeck(newDeck)
	}
	render(){
		return(
	      <div>
	        <div className='panel panel-default col-xs-6' >
	          <div className='panel-body'>
	            <form onSubmit={this.newDeckHandler}>
	              <div className='form-group'>
	                <label>Deck Name: </label>
	                <input className='form-control' ref='deckName' />
	              </div>
	              <div className='form-group'>
	                <label>Deck Description: </label>
	                <input className='form-control' ref='deckDesc' />
	               </div>
	              <input type="submit"/>
	            </form>
	          </div>
	        </div>
	      </div>
		)
	}
}

function mapDispatchToProps(dispatch){
	return {actions: bindActionCreators(actions, dispatch)}
}

const componentCreator = connect(null, mapDispatchToProps)
export default componentCreator(DeckNew);
