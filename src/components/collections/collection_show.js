import React from 'react';
import {connect} from 'react-redux';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { DropdownButton } from 'react-bootstrap';
import {MenuItem} from 'react-bootstrap';

class CollectionSetsShow extends React.Component {
	constructor(){
		super();
		this.filter = this.filter.bind(this)
		this.filteredCards = this.filteredCards.bind(this)
		this.open = this.open.bind(this)
		this.close = this.close.bind(this)
		this.manaConverter = this.manaConverter.bind(this)
		this.state = {
			filterColor: "All",
			filterRarity: "All",
			showModal: false,
			card: {}
		}
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

	filterColor(color){
		this.setState({
			filterColor: color
		})
	}

	filterRarity(rarity){
		this.setState({
			filterRarity: rarity
		})
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

	manaConverter(mana_cost) {
		let cost = mana_cost
		const that = this;
		return cost.map(mana =>{
			return <img src={that.imagePaths()[mana]} height='25px' width='25px' />
		})
	}

	filter(){
		return(
			<div>
				Color:
				<DropdownButton bsStyle='default' title={this.state.filterColor}>
					<MenuItem onSelect={()=>this.filterColor("All")}>All</MenuItem>
				    <MenuItem onSelect={()=>this.filterColor("Red")}>Red</MenuItem>
				    <MenuItem onSelect={()=>this.filterColor("Blue")}>Blue</MenuItem>
					<MenuItem onSelect={()=>this.filterColor("Black")}>Black</MenuItem>
					<MenuItem onSelect={()=>this.filterColor("Green")}>Green</MenuItem>
					<MenuItem onSelect={()=>this.filterColor("White")}>White</MenuItem>
					<MenuItem onSelect={()=>this.filterColor("Colorless")}>Colorless</MenuItem>
				</DropdownButton>
				  Rarity:
				<DropdownButton bsStyle='default' title={this.state.filterRarity}>
					<MenuItem onSelect={()=>this.filterRarity("All")}>All</MenuItem>
					<MenuItem onSelect={()=>this.filterRarity("Rare")}>Rare</MenuItem>
					<MenuItem onSelect={()=>this.filterRarity("Uncommon")}>Uncommon</MenuItem>
					<MenuItem onSelect={()=>this.filterRarity("Common")}>Common</MenuItem>
				</DropdownButton>
			</div>
		)
	}

	filteredCards(){
		if (this.state.filterColor === "All" && this.state.filterRarity === "All") {
			console.log("filteredCards()",this.props.collection.cards)
			return this.props.collection.cards
		}
		else {
			return this.props.collection.cards.filter(card=>{
				if (this.state.filterColor != "All" && this.state.filterRarity === "All") {
					if (card.colors){
						return card.colors.includes(this.state.filterColor)
					}
				}
				else if (this.state.filterRarity != "All" && this.state.filterColor === "All" ) {
					return card.rarity === this.state.filterRarity
				}
				else if (this.state.filterColor != "All" && this.state.filterRarity != "All"){
					if (card.colors){
						return card.colors.includes(this.state.filterColor) && card.rarity === this.state.filterRarity
					}
				}
			})
		}
	}

	cardDisplay(){
		return(
			this.filteredCards().map(cardToShow => {
				console.log("cardDisplay:", cardToShow)
				return(
					<div>
						<div className="panel panel-default col-md-5 clearfix" onClick={()=>this.open(cardToShow)}>
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

	render(){
		return(
			<div>
				<div className='panel panel-default col-md-12'>
					<div className='panel-heading'> {this.filter()} </div>
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

			      			</div>
			      			<div className='col-xs-6'>
			      				<ul className='list-group'>
			      					<li className='list-group-item'>Rarity: {this.state.card.rarity}</li>
			      					<li className='list-group-item'>Mana Cost: {this.state.card.mana_cost}</li>
			      					<li className='list-group-item'>CMC: {this.state.card.cmc}</li>
			      					<li className='list-group-item'>Power: {this.state.card.power}</li>
			      					<li className='list-group-item'>Toughness: {this.state.card.toughness}</li>
			                		<li className='list-group-item'>Flavor: {this.state.card.flavor}</li>
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
		console.log("collection show mstp:", state)
		if(state.collections.length > 0){
			const collection_match = state.collections.find(collection => {return collection.user_id == ownProps.params.id} )
			console.log("collection show collection:", collection_match)
			return {collection: collection_match}
		}else{
			return {collection: {cards: [{name:"Loading",}]}}
		}
}

const componentCreator = connect(mapStateToProps)
export default componentCreator(CollectionSetsShow)
