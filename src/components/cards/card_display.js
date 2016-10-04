import React from 'react';
import {Link} from 'react-router'

export default function CardDisplay(props){
	return(
		<div className="panel panel-default col-md-5">
			<div className = "panel-heading"><Link to={`/cards/${props.card.id}`}>{props.card.name}</Link></div>
			<div className = "panel-body">
				<div className ='row'>{props.card.mana_cost} || {props.card.colors} || {props.card.rarity}</div>
			</div>

		</div>

	)
}