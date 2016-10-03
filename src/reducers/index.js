import { combineReducers } from 'redux';
import cardsReducer from './cards_reducer';

const rootReducer =  combineReducers({
  cards: cardsReducer
});

export default rootReducer;