import React from 'react';
import {connect} from 'react-redux';

class CollectionSetsShow extends React.Component {

	render(){
		return(
			<div>
				<h1>Hey There</h1>
			</div>
		)
	}
}


function mapStateToProps(state, ownProps){
		if(state.collections.length > 0){
			const collection_match = state.collections.map(collection => collection.user_id == ownProps.params.id )
			return {collection: collection_match}
		}
}

const componentCreator = connect(mapStateToProps)
export default componentCreator(CollectionSetsShow)