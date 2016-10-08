import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import CardDisplay from '../cards/card_display'
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import * as actions from '../../actions/index'
import { bindActionCreators } from 'redux'

class CardSetsShow extends React.Component {
	constructor(){
		super();
		this.addCollection= this.addCollection.bind(this)
		this.open = this.open.bind(this)
		this.close = this.close.bind(this)
		this.state = {
			showModal: false,
			card: {}
		}
	}

	imagePaths(){
		return {
			"X": "http://vignette1.wikia.nocookie.net/mtg/images/1/13/Mana_X.png/revision/latest?cb=20070609142942",
			"0": "http://i.imgur.com/RpdXzoT.gif",
			"1": "http://i.imgur.com/5yo8rjQ.gif",
			"2": "http://i.imgur.com/MTIk6kd.gif",
			"3": "http://i.imgur.com/azPjXFT.gif",
			"4": "http://i.imgur.com/1rqqALq.gif",
			"5": "http://i.imgur.com/IejH3kW.gif",
			"6": "http://i.imgur.com/FqxDqWa.gif",
			"7": "http://i.imgur.com/con0GVj.gif",
			"8": "http://i.imgur.com/DLsy4va.gif",
			"9": "http://i.imgur.com/AROndxm.gif",
			"10": "http://i.imgur.com/SXoGktV.gif",
			"11": "http://i.imgur.com/o9rqf2n.gif",
			"12": "http://i.imgur.com/59c4F27.gif",
			"13": "http://i.imgur.com/sJdhllV.gif",
			"15": "http://i.imgur.com/g5TbzAd.gif",
			"16": "http://i.imgur.com/h60rKS0.gif",
			"B": "http://i.imgur.com/xpU5btN.gif",
			"R": "http://i.imgur.com/G7gS4nO.gif",
			"U": "http://i.imgur.com/h60rKS0.gif",
			"G": "http://i.imgur.com/tGnxYQh.gif",
			"W": "http://i.imgur.com/Xd07cpp.gif"
		};
	}
  
  logInButton(){
  	debugger
    if(this.props.logged_in){
      return <button className="btn-default btn-sm" onClick={()=>this.addCollection()}>Add to your Collection</button>
    }else{
      return <p>Sign Up to start your collection</p>
    }
  }

  addCollection(card_id){
    this.props.actions.addCardToCollection(card_id)
  }

  manaConverter(mana_cost) {
		let cost = mana_cost
		const that = this;
		return cost.map(mana =>{
		 	return <img src={that.imagePaths()[mana]} />
		})
	}

	close() {
    this.setState({ showModal: false });
  }

  open(cardToShow) {
    this.setState({
			showModal: true,
			card: cardToShow
		 });
  }


	cardDisplay(){
		return(
			this.props.set.cards.map(cardToShow => {
				return(
					<div>
						<div className="panel panel-default col-md-5" onClick={()=>this.open(cardToShow)}>
							<div className="panel-heading">{cardToShow.name}</div>
							<div className="panel-body">
								<div className='row'> {this.manaConverter(cardToShow.mana_cost)} | {cardToShow.rarity}</div>
							</div>
						</div>
					</div>
				)
			})
		)
	}

	render() {
		return(
			<div>
				<div className='panel panel-default col-md-12'>
					<div className='panel-heading'>set name</div>
						<div className="panel-body" id='set_cards'>
							{this.cardDisplay()}
						</div>

						<div>
			        <Modal show={this.state.showModal} onHide={this.close}>
			          <Modal.Header closeButton>
			            <Modal.Title>{this.state.card.name}</Modal.Title>
			          </Modal.Header>
			          <Modal.Body>
									<div className='col-xs-6'>
			      				<img src={this.state.card.image_url} className='img-responsive' />
			      				{this.props.logged_in ? <button className="btn-default btn-sm" onClick={()=>this.addCollection(this.state.card.id)}>Add to your Collection</button> : <p>Sign Up to start your collection</p> }
			      			</div>
			      			<div className='col-xs-6'>
			      				<ul className='list-group'>
			      					<li className='list-group-item'>Rarity: {this.state.card.rarity}</li>
			      					<li className='list-group-item'>Mana Cost: {this.state.card.mana_cost}</li>
			      					<li className='list-group-item'>CMC: {this.state.card.cmc}</li>
			      					<li className='list-group-item'>Power: {this.state.card.power}</li>
			      					<li className='list-group-item'>Toughness: {this.state.card.toughness}</li>
			                <li className='list-group-item'>Fl2avor: {this.state.card.flavor}</li>

			      				</ul>
			      			</div>
			          </Modal.Body>
			          <Modal.Footer>
			          </Modal.Footer>
			        </Modal>
			      </div>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state, ownProps){
	if (state.cardsets.length > 0){
		const cardset= state.cardsets.find(set => {
			return set.id == ownProps.params.id})
		return {set: cardset,logged_in: !!sessionStorage.jwt}
	}else{
		return {set:{name: 'david'}}
	}
}

function mapDispatchToProps(dispatch){
  return {actions: bindActionCreators(actions, dispatch)}
}

const componentCreator = connect(mapStateToProps, mapDispatchToProps)
export default componentCreator(CardSetsShow)
