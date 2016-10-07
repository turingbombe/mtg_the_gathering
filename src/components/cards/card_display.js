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
