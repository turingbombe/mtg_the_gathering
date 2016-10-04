const BASE_URL = 'http://localhost:3000/api/v1'

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
			console.log('fetch cards running')
			return response.json();
		}).then(cardsPayload =>{
			return cardsPayload;
		})
	console.log(cards)
	return {
		type: 'FETCH_CARDS',
		payload: cards
	}
}
