import React from 'react';
import {connect} from 'react-redux';

class CollectionSetsShow extends React.Component {

	render(){
		return(
			<div>
				<h1>Hey There</h1>
				<ul>
					{this.props.collection.card_ids.map(card => <li>{card}</li>)}
				</ul>
			</div>
		)
	}
}


function mapStateToProps(state, ownProps){
		console.log("collection show mstp:", state)
		if(state.collections.length > 0){
			const collection_match = state.collections.find(collection => {return collection.user_id == ownProps.params.id} )
			console.log("collection show match:", collection_match)
			return {collection: collection_match}
		}else{
			return {collection: {card_ids: ["Loading"]}}
		}
}

const componentCreator = connect(mapStateToProps)
export default componentCreator(CollectionSetsShow)