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
