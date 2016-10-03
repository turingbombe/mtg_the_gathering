import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

function CardsIndex(props){
	return(
		<div>
			<ul>
			{props.cards.map(card => card.artist)}
			</ul>
		</div>
	)

}

function mapStateToProps(state){
  return {
    cards: state.cards
  }
}

const componentCreator = connect(mapStateToProps)
export default componentCreator(CardsIndex);