import React from 'react'
import * as actions from '../../actions/index'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {Link} from 'react-router'

class CardDisplay extends React.Component {
	constructor(){
		super();
		this.fetchSelectedCard = this.fetchSelectedCard.bind(this)
	}

	fetchSelectedCard(id) {
		this.props.actions.fetchCard(id)
	}

	render(){
		return(
			<div className="panel panel-default col-md-5">
				<div className = "panel-heading"><Link to={`/cards/${this.props.card.id}`} onClick={this.fetchSelectedCard(this.props.card.id)}>{this.props.card.name}</Link>
				</div>
				<div className = "panel-body">
					<div className ='row'>{this.props.card.mana_cost} || {this.props.card.colors} || {this.props.card.rarity}</div>
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
