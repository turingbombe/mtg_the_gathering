import React from 'react';
import { DropdownButton } from 'react-bootstrap';
import {MenuItem} from 'react-bootstrap';

export default function(){
	function filterColor(color){
		this.setState({
			filter: color
		})
	}

	return(
		<div>
			<DropdownButton bsStyle='default' title='Color' id='color_filter'>
			  <MenuItem onSelect={filterColor()}>Red</MenuItem>
			  <MenuItem eventKey="2">Blue</MenuItem>
			  <MenuItem eventKey="3">Green</MenuItem>
				<MenuItem eventKey="3">Black</MenuItem>
				<MenuItem eventKey="3">White</MenuItem>
		 </DropdownButton>
		</div>
	)
}
