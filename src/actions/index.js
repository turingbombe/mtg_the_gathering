const BASE_URL = 'http://localhost:3000/api/v1'

export function fetchCard(id){
	const card = fetch(`${BASE_URL}/cards/${id}`).then(response =>{
			return response.json();
		}).then(cardPayload =>{
			return cardPayload;
		})
	return {
		type: 'FETCH_CARD',
		payload: card
	}
}

export function searchCard(searchTerm){
  const searchCard = fetch('http://localhost:3000/api/v1/searches', {
    method: 'POST',
    headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
    body: JSON.stringify({search: searchTerm})
  }).then(response => {
    return response.json()
  }).then(searchPayload => {
    return searchPayload
  }).catch(error => {
  })
  return{ type: 'SEARCH_CARD', payload: searchCard}
}


export function fetchCardSets(){
	const cardsets = fetch(`${BASE_URL}/card_sets/`).then(response =>{
			return response.json();
		}).then(cardSetPayload =>{
			return cardSetPayload;
		})
	return {
		type: 'FETCH_CARDSETS',
		payload: cardsets
	}
}

export function fetchCards(){
	const cards = fetch(`${BASE_URL}/cards/`).then(response =>{
			return response.json();
		}).then(cardsPayload =>{
			return cardsPayload;
		})
	return {
		type: 'FETCH_CARDS',
		payload: cards
	}
}

export function signIn(userInfo){
  const loggedInUser = fetch('http://localhost:3000/api/v1/sessions', {
    method: 'POST',
    headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
    body: JSON.stringify({auth: userInfo})
  }).then(response => {
    return response.json()
  }).then(userPayload => {
    return userPayload
  }).catch(error => {
  })

  return{ type: 'LOG_IN_SUCCESS', payload: loggedInUser}
}

export function newUser(newUserInfo) {
  const newUser = fetch('http://localhost:3000/api/v1/users', {
    method: 'POST',
    headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
    body: JSON.stringify({user: newUserInfo})
  }).then(response => {
    return response.json()
  }).then(newUserPayload => {
    return newUserPayload
  })

  return {type: 'ADD_USER', payload: newUser}
}

export function setUser(userInfo){
	return {type: 'LOG_IN_SUCCESS', payload: userInfo}
}

export function signOut() {
  return {type: 'LOG_OUT'};
}

export function fetchUsers(){
	const users = fetch(`${BASE_URL}/users/`).then(response =>{
			return response.json();
		}).then(usersPayload =>{
			return usersPayload;
		})
	return {
		type: 'FETCH_USERS',
		payload: users
	}
}

export function addCardToCollection(card_id){
	const updatedCollection = fetch('http://localhost:3000/api/v1/ownerships/', {
    method: 'POST',
    headers: {'AUTHORIZATION': `Bearer ${sessionStorage.jwt}`, 'Accept': 'application/json', 'Content-Type': 'application/json'},
    body: JSON.stringify({card_id: card_id})
  	}).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });

    return {type:'ADD_CARD_TO_COLLECTION', payload: updatedCollection}
}

export function getUserCollection(user_id){
	const userCollecition = fetch(`http://localhost:3000/api/v1/ownerships/${user_id}`, {
    method: 'GET',
    headers: {'AUTHORIZATION': `Bearer ${sessionStorage.jwt}`}
  	}).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });

    return{type: 'FETCH_USER_COLLECTION', payload:userCollecition}
}

export function addCardToDeck(card_id,deck_id){
  console.log("Add card to deck:",card_id,deck_id)
  const updatedCollectionDeck = fetch(`http://localhost:3000/api/v1/card_decks/${deck_id}`, {
  method: 'PATCH',
  headers: {'AUTHORIZATION': `Bearer ${sessionStorage.jwt}`, 'Accept': 'application/json', 'Content-Type': 'application/json'},
  body: JSON.stringify({card_id: card_id,deck_id: deck_id})
  }).then(response => {
    return response.json();
  }).catch(error => {
    return error;
  });

  return {type: 'ADD_CARD_TO_DECK', payload:updatedCollectionDeck}
}

export function fetchDecks(){
  const decks = fetch(`${BASE_URL}/decks/`).then(response =>{
      return response.json();
    }).then(decksPayload =>{
      return decksPayload;
    })
  return {
    type: 'FETCH_DECKS',
    payload: decks
  }  
}

export function createDeck(newDeck){
  const freshDeck = fetch('http://localhost:3000/api/v1/decks/', {
    method: 'POST',
    headers: {'AUTHORIZATION': `Bearer ${sessionStorage.jwt}`, 'Accept': 'application/json', 'Content-Type': 'application/json'},
    body: JSON.stringify({deck: newDeck})
    }).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });

    return {type: 'NEW_DECK', payload: freshDeck}
}