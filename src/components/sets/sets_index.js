import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import * as actions from '../../actions/index'
import { bindActionCreators } from 'redux'

class CardSetsIndex extends React.Component {
	constructor(){
		super();
		this.setPanel = this.setPanel.bind(this)
		this.searchHandler = this.searchHandler.bind(this)
		this.close = this.close.bind(this)
		this.searchBar = this.searchBar.bind(this)
		this.addCollection= this.addCollection.bind(this)
		this.state = {
			showModal: false
		}
	}

	setPanel(set) {
		return(
			<li key= {set.id}>
				<Link to={`/cardsets/${set.id}`}>{set.name}</Link>
			</li>
		)
	}

	close() {
		this.setState({ showModal: false });
	}

	searchHandler(event){
		event.preventDefault()
		const searchTerm = {search: this.refs.search.value}
		this.props.actions.searchCard(searchTerm)
		this.setState({
			showModal: true
		})
		this.refs.search.value = ""
	}

	addCollection(card_id){
    	this.props.actions.addCardToCollection(card_id)
	}

	searchBar() {
		return(
			<div>
				<form onSubmit={this.searchHandler}>
					<input ref='search' placeholder='Search for Card by Name' />
				</form>
			</div>
		)
	}

	render(){
		return(
			<div>
				<div className='panel panel-default col-md-4' >
					<div className='panel-heading'>{this.searchBar()}</div>
					<div className='panel-heading'>Sets</div>
					<div className='panel-body' id="sets_index">

						<div>
			        <Modal show={this.state.showModal} onHide={this.close}>
			          <Modal.Header closeButton>
			            <Modal.Title>{this.props.search.name}</Modal.Title>
			          </Modal.Header>
			          <Modal.Body>
									<div className='col-xs-6'>
			      				<img src={this.props.search.image_url} className='img-responsive' />
			      				{this.props.logged_in ? <button className="btn-default btn-sm" onClick={()=>this.addCollection(this.props.search.id)}>Add to your Collection</button> : <p>Sign Up to start your collection</p> }
			      			</div>
			      			<div className='col-xs-6'>
			      				<ul className='list-group'>
			      					<li className='list-group-item'>Rarity: {this.props.search.rarity}</li>
			      					<li className='list-group-item'>Mana Cost: {this.props.search.mana_cost}</li>
			      					<li className='list-group-item'>CMC: {this.props.search.cmc}</li>
			      					<li className='list-group-item'>Power: {this.props.search.power}</li>
			      					<li className='list-group-item'>Toughness: {this.props.search.toughness}</li>
			                <li className='list-group-item'>Flavor: {this.props.search.flavor}</li>
			      				</ul>
			      			</div>
			          </Modal.Body>
			          <Modal.Footer>
			          </Modal.Footer>
			        </Modal>
			      </div>

						<ul>
							{this.props.cardsets.map( set => this.setPanel(set) )}
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

function mapStateToProps(state){

  return {
    cardsets: state.cardsets,
		search: state.search,
		logged_in: !!sessionStorage.jwt
  }
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

const componentCreator = connect(mapStateToProps, mapDispatchToProps)
export default componentCreator(CardSetsIndex);
