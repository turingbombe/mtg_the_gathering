import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import * as actions from '../../actions/index'
import { bindActionCreators } from 'redux'

class CardShowModal extends React.Component {
  constructor(){
    super();
    this.close = this.close.bind(this)
    this.open = this.open.bind(this)
    this.state = {
      showModal: true
    }
  }

  logInButton(){
    if(this.props.logged_in){
      return <button className="btn-default btn-sm" onClick={this.addCollection}>Add to your Collection</button>
    }else{
      return <p>Sign Up to start your collection</p>
    }
  }

  addCollection(){
    console.log('Hit addCollection')
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  render() {
    return (
      <div>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.card.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className='col-md-4'>
      				<img src={this.props.card.image_url} className='img-responsive' />
              {this.logInButton()}
      			</div>
      			<div className='col-md-4'>
      				<ul className='list-group'>
      					<li className='list-group-item'>Name: {this.props.card.name}</li>
      					<li className='list-group-item'>Multiverse ID: {this.props.card.multiverse_id}</li>
      					<li className='list-group-item'>Rarity: {this.props.card.rarity}</li>
      					<li className='list-group-item'>Mana Cost: {this.props.card.mana_cost}</li>
      					<li className='list-group-item'>CMC: {this.props.card.cmc}</li>
      					<li className='list-group-item'>Power: {this.props.card.power}</li>
      					<li className='list-group-item'>Toughness: {this.props.card.toughness}</li>
                <li className='list-group-item'>Flavor: {this.props.card.flavor}</li>
      				</ul>
      			</div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
};

function mapStateToProps(state, ownProps){
	if (state.cards.length > 0){
		const card= state.cards.find(card => {return card.id == ownProps.params.id})
		return {card: card, logged_in: !!sessionStorage.jwt}
	}
  else{
		return {card:{name: 'david'}}
	}
}

function mapDispatchToProps(dispatch){
  return {actions: bindActionCreators(actions, dispatch)}
}

const componentCreator = connect(mapStateToProps)
export default componentCreator(CardShowModal)
