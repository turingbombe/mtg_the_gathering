const BASE_URL = 'http://localhost:3000/api/v1'

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