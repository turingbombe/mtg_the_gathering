import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

function CardShow(props){
	return(
		<div>
			<div className='col-md-4'>
				<img src={props.card.image_url} className='img-responsive' />
			</div>
			<div className='col-md-4'>
				<ul className='list-group'>
					<li className='list-group-item' >Name: {props.card.name}</li>
					<li className='list-group-item'>Multiverse ID: {props.card.multiverse_id}</li>
					<li className='list-group-item'>Rarity: {props.card.rarity}</li>
					<li className='list-group-item'>Mana Cost: {props.card.mana_cost}</li>
					<li className='list-group-item'>CMC: {props.card.cmc}</li>
					<li className='list-group-item'>Power: {props.card.power}</li>
					<li className='list-group-item'>Toughness: {props.card.toughness}</li>
				</ul>
			</div>

		</div>
	)
}

function mapStateToProps(state, ownProps){
	if (state.cards.length > 0){
		const card= state.cards.find(card => {return card.id == ownProps.params.id})
		return {card: card}
	}else{
		return {card:{name: 'david'}}
	}
}

const componentCreator = connect(mapStateToProps)
export default componentCreator(CardShow)
