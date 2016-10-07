import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import {browserHistory} from 'react-router'


class CardShowModal extends React.Component {
  constructor(){
    super();
    this.close = this.close.bind(this)
    this.open = this.open.bind(this)
    this.state = {
      showModal: true
    }
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
            <Modal.Title>modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className='col-xs-6'>
      				<img src={this.props.card.image_url} className='img-responsive' />
      			</div>
      			<div className='col-xs-6'>
      				<ul className='list-group'>
      					<li className='list-group-item'>Rarity: {this.props.card.rarity}</li>
      					<li className='list-group-item'>Mana Cost: {this.props.card.mana_cost}</li>
      					<li className='list-group-item'>CMC: {this.props.card.cmc}</li>
      					<li className='list-group-item'>Power: {this.props.card.power}</li>
      					<li className='list-group-item'>Toughness: {this.props.card.toughness}</li>
                <li className='list-group-item'>Fl2avor: {this.props.card.flavor}</li>

      				</ul>
      			</div>
          </Modal.Body>
          <Modal.Footer>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
};

function mapStateToProps(state, ownProps){
	if (state.cards.length > 0){
		const card= state.cards.find(card => {return card.id == ownProps.params.id})
		return {card: card}
	}
  else{
		return {card:{name: 'david'}}
	}
}

const componentCreator = connect(mapStateToProps)
export default componentCreator(CardShowModal)
