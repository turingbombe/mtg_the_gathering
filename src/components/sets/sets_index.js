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
			<div>
				<div className='panel panel-default col-md-4' >
					<div className='panel-heading'>Sets</div>
					<div className='panel-body' id="sets_index">
						<ul>
							{this.props.cardsets.map( set => this.setPanel(set) )}
						</ul>
					</div>
				</div>
				<div className='col-md-8'>
					{this.props.children}
				</div>
			</div>
		)
	}
}

function mapStateToProps(state){
  return {
    cardsets: state.cardsets
  }
}

const componentCreator = connect(mapStateToProps)
export default componentCreator(CardSetsIndex);
