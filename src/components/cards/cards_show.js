import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

function CardShow(props){
	return(
		<div>
			{props.card.name}
			<img src={props.card.image_url} />
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
