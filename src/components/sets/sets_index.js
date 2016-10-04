import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

class CardSetsIndex extends React.Component {
	constructor(){
		super();
		this.setPanel = this.setPanel.bind(this)
	}

	setPanel(set) {
		return(
			<li>
				<Link to={`/cardsets/${set.id}`}>{set.name}</Link>
			</li>
		)
	}

	render(){
		return(
			<div className='col-md-4'>
				<ul>
					{this.props.cardsets.map( set => this.setPanel(set) )}
				</ul>
			</div>
		)
	}
}

function mapStateToProps(state){
	debugger
  return {
    cardsets: state.cardsets
  }
}

const componentCreator = connect(mapStateToProps)
export default componentCreator(CardSetsIndex);
