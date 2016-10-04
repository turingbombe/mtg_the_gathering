import { combineReducers } from 'redux';
import cardsReducer from './cards_reducer';
import usersReducer from './users_reducer';
import cardSetsReducer from './cardsets_reducer';

const rootReducer =  combineReducers({
  cards: cardsReducer,
  users: usersReducer,
  cardsets: cardSetsReducer
});

export default rootReducer;
