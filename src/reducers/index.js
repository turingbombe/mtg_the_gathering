import { combineReducers } from 'redux';
import cardsReducer from './cards_reducer';
import usersReducer from './users_reducer';
import cardSetsReducer from './cardsets_reducer';
import sessionsReducer from './sessions_reducer';
import collectionReducer from './collection_reducer';
import searchReducer from './search_reducer';
import errorsReducer from './errors_reducer';
import decksReducer from './decks_reducer'

const rootReducer =  combineReducers({
  cards: cardsReducer,
  users: usersReducer,
  cardsets: cardSetsReducer,
  sessions: sessionsReducer,
  collections: collectionReducer,
  search: searchReducer,
  decks: decksReducer
});

export default rootReducer;
