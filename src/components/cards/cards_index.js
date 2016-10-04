import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

class CardsIndex extends React.Component {

	render(){
		return(
			<div className='col-md-4'>
			</div>
		)
	}
}

function mapStateToProps(state){
  return {
    cards: state.cards
  }
}

const componentCreator = connect(mapStateToProps)
export default componentCreator(CardsIndex);
