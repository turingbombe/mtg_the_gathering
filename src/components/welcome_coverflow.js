import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import Coverflow from 'react-coverflow';


function WelcomeCoverflow(props){
	return(
		<div>
			<Coverflow width={960} height={480} displayQuantityOfSide={2} navigation={true} enableHeading={false}>
				{props.cards.map(card => <img src={card.image_url} alt={card.name} key={card.id}/>)}
			</Coverflow>
		</div>
	)
}

function mapStateToProps(state){
	return{
		cards: state.cards
	}
}

const componentCreator = connect(mapStateToProps)
export default componentCreator(WelcomeCoverflow)
