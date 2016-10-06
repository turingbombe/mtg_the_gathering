import React from 'react'
import * as actions from '../../actions/index'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {Link} from 'react-router'

class CardDisplay extends React.Component {
	constructor(props){
		super(props);
		this.fetchSelectedCard = this.fetchSelectedCard.bind(this)
		this.manaConverter = this.manaConverter.bind(this)
		this.imagePaths = this.imagePaths.bind(this)
	}

	fetchSelectedCard(id) {
		this.props.actions.fetchCard(id)
	}

	imagePaths(){
		return {
			"0": "../../public/0.jpeg",
			"1": "../../public/1.jpeg",
			"2": "../../public/2.jpeg",
			"3": "../../public/3.jpeg",
			"4": "../../public/4.jpeg",
			"5": "../../public/5.jpeg",
			"6": "../../public/6.jpeg",
			"7": "../../public/7.jpeg",
			"8": "../../public/8.jpeg",
			"9": "../../public/9.jpeg",
			"10": "../../public/10.jpeg",
			"11": "../../public/11.jpeg",
			"12": "../../public/12.jpeg",
			"13": "../../public/13.jpeg",
			"15": "../../public/15.jpeg",
			"16": "../../public/16.jpeg",
			"B": "../../public/black.jpeg",
			"R": "../../public/red.jpeg",
			"U": "../../public/blue.jpeg",
			"G": "../../public/green.jpeg",
			"W": "../../public/white.jpeg",
		};
	}

	manaConverter() {
		let cost = this.props.card.mana_cost
		const that = this;
		return cost.map(mana =>{
		 	return <img src={that.imagePaths()[mana]} />
		})
	}


	render(){
		return(
			<div className="panel panel-default col-md-5">
				<div className="panel-heading"><Link to={`/cards/${this.props.card.id}`} onClick={this.fetchSelectedCard(this.props.card.id)}>{this.props.card.name}</Link>
				</div>
				<div className="panel-body">
					<div className='row'> {this.manaConverter()} | {this.props.card.rarity}</div>
				</div>
			</div>
		)
	}
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

const componentCreator = connect(null, mapDispatchToProps)
export default componentCreator(CardDisplay);
