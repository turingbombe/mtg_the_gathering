import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import CardDisplay from '../cards/card_display'

function CardSetsShow(props){
	return(
		<div>
			<div className='panel panel-default col-md-12'>
				<div className='panel-heading'>{props.set.name}</div>
					<div className="panel-body" id='set_cards'>
						{props.set.cards.map(cardToShow => <CardDisplay card={cardToShow}/>)}
					</div>
			</div>
		</div>
	)
}


function mapStateToProps(state, ownProps){
	if (state.cardsets.length > 0){
		const cardset= state.cardsets.find(set => {return set.id == ownProps.params.id})
		return {set: cardset}
	}else{
		return {set:{name: 'david'}}
	}
}

const componentCreator = connect(mapStateToProps)
export default componentCreator(CardSetsShow)
