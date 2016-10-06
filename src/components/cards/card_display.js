import React from 'react'
import * as actions from '../../actions/index'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {Link} from 'react-router'

class CardDisplay extends React.Component {
	constructor(props){
		super(props);
		this.fetchSelectedCard = this.fetchSelectedCard.bind(this)
		this.manaConverter = this.manaConverter.bind(this)
		this.imagePaths = this.imagePaths.bind(this)
	}

	fetchSelectedCard(id) {
		this.props.actions.fetchCard(id)
	}

	imagePaths(){
		return {
			"X": "http://vignette1.wikia.nocookie.net/mtg/images/1/13/Mana_X.png/revision/latest?cb=20070609142942",
			"0": "https://lh5.googleusercontent.com/-z5gUwZ7IF6hQOB0Ohvv_nrZM-CCjm9uL5WWnHuAgfwC6eXAVY21xJ25qZyf_FouIX7647nvRKi_u6I=w2284-h1278",
			"1": "https://lh4.googleusercontent.com/MGmLmiZ2h8gbOZEH0WWPdLoXabQ-Dhdn1L2OBgKupyVXTXcrRUZWC3zg4PVlKUMilVM3RwWZ6B-ujzM=w2284-h1278",
			"2": "https://lh4.googleusercontent.com/hZrbvDjzEmadE630uEcW2Tcyv1ZoY9EJLc-O6_KRW7eT_8VKQU9uOFKuzReZfpURnKN4YUPeoWZ4r1o=w2284-h1278",
			"3": "https://lh3.googleusercontent.com/sRnjjUebQBzpgTAj69xG5_jNRNBOH44vCcbTB-uuXSt2fQaTzCpwR5jk_S1hkUhZmtnhaMbyO_Kd_QE=w2284-h1278",
			"4": "https://lh6.googleusercontent.com/X3eAGGZypTdgwk06qig14oZodp_cRE0Fp-B3OnbCEqLK0uiBEVt0pEyi93LAv-2e9eTnWBAOdrUVIg0=w2284-h1278",
			"5": "https://lh6.googleusercontent.com/0l7XQ7tGUyhK6nwJ-CNXCDy_ltW0mEdxfnMwVymr6yAhR2qEu-pIM-c9khpktbjYDlr3IdgVCEmwBVQ=w2284-h1278",
			"6": "https://lh5.googleusercontent.com/qcHXnUZicl9HTAZKRoRydEIbukzJtZ_KYPa4o6H-1iWnXJmxRWqFzz1Z3w25ytTRMhiX8dfWHHIDc54=w2284-h1278",
			"7": "https://lh4.googleusercontent.com/KlQmBi62x2qkLlNXkmocAsKXvcUerATJiOHK4deDZmO6EK-s4nqnyPALRDzB12R_W3xOVYcQqqr0DS4=w2284-h1278",
			"8": "https://lh4.googleusercontent.com/_oSd6PRUzANjifAx49T6lHKjf3DboDX5EBd7CNXiQxksRK1lDg97vBsRDhxTCs8CGzss0fKzrgWDtIY=w2284-h1278",
			"9": "https://lh6.googleusercontent.com/FcMHo6Vloh_Y2sALGA9r-BHfJEGSzadMumzx66beB0S7-dbXrDc9t-LncHGMFD6ILklxViIXndFO0ZM=w2284-h1278",
			"10": "https://lh3.googleusercontent.com/VeQVrbzOqaWa4lCPiO7N2MY9CT2EQuIxj_Zi9PLoWP9qbC8LxjHZzLhUy22z-Y4LiFRiiJEfWQDWCJI=w2284-h1278",
			"11": "https://lh4.googleusercontent.com/Z_2fv9a9NySeyiMdSLz0GFLuC8cB1ZWEotJYwrq5Pfs_clZoGCwwpaOKGdrPkU_zjFHaJ0beIKgGrKo=w2284-h1278",
			"12": "https://lh3.googleusercontent.com/tPGr6fXVemcvhVvEFZJESkK3TbYIfImwuVEGV95gY1cX2GPSh_ekMXk-5MC_Pftb35Rwrbo8mJy60Sc=w2284-h1278",
			"13": "https://lh3.googleusercontent.com/ZuAnDUvQldAQTDBniaxxV6mxGrsi7jigfma_Tc7cBeQLwCsTxiQDZf9fB5GERjFDvKdFS_V1ynTEa10=w2284-h1278",
			"15": "https://lh6.googleusercontent.com/d-cAuTzlhXt5NtVFNVc0-wLZZsRtlpCSeRZB6rr8X_t2g5ZVxN38_tG7s1uDhpzItKAUdEJh7CfEjGk=w2284-h1278",
			"16": "https://lh3.googleusercontent.com/gz20N-cAHtLrEgIYxFyv-twngjFN_SpBfM0kTU4YFlGW-mUhySyIoLFIIhiv4NmUwBZS2_9V_sl_Gvk=w2284-h1278",
			"B": "https://lh6.googleusercontent.com/EVdfh9PQruSbF9cFbPyLnhbXmxfaRtmhfrdREOA-90eovxeufzUONiN-WfojA0W-4gMDlUBZDmNzIhk=w2284-h1278",
			"R": "https://lh5.googleusercontent.com/iAByyvi-Z95hqDy8VVvQnWnR-0z9UPllSXJ-uHFBKcavQJTgo8ROSbvjZSFxXxti3aBqTX0G8AL8b5Y=w2284-h1278",
			"U": "https://lh5.googleusercontent.com/XRE8-2jhcU2zkFQOOgDsaiH-B8aiBGLu5HJDB6yKFXPurpyE_bqdmzapAY-7ixlV_YDWH28JV5oa8K4=w2284-h1278",
			"G": "https://lh5.googleusercontent.com/1FbFJ3K3AhfmsnJqxq0RyRx4RBM5_AygoQrrhT9UPSlAqHCFLDdopUfQRaCd_ugjUwEWGniopLchShU=w2284-h1278",
			"W": "https://lh5.googleusercontent.com/xAzfC_v7pvlNn9eYrSK75ElDQMg_ZPApulYqcGgj86Z2Y0jVroThDpI_h7Cj4uXBsjTCpoZZ7w3ebJA=w2284-h1278"
		};
	}

	manaConverter() {
		let cost = this.props.card.mana_cost
		const that = this;
		return cost.map(mana =>{
		 	return <img src={that.imagePaths()[mana]} />
		})
	}


	render(){
		return(
			<div className="panel panel-default col-md-5">
				<div className="panel-heading"><Link to={`/cards/${this.props.card.id}`} onClick={this.fetchSelectedCard(this.props.card.id)}>{this.props.card.name}</Link>
				</div>
				<div className="panel-body">
					<div className='row'> {this.manaConverter()} | {this.props.card.rarity}</div>
				</div>
			</div>
		)
	}
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

const componentCreator = connect(null, mapDispatchToProps)
export default componentCreator(CardDisplay);
