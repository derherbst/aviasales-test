let initialState = {
	initialTickets: [],
	tickets: [],
	loading: true,
	error: null,
	currency: 'RUB',
	stopsAmount: null
};

const convertTicketsPrice = (state, curr) => {

	const { initialTickets } = state;

	const newCurrency = initialTickets.map((ticket) => {

		switch (curr) {
			case 'EUR':
				return {
					...ticket,
					price: (ticket.price/73).toFixed(0)
				};
			case 'USD':
				return {
					...ticket,
					price: (ticket.price/65).toFixed(0)
				};
			default:
				return ticket
		}

	});

	console.log(initialTickets);
	console.log(state);

	return {
		...state,
		tickets: newCurrency,
		currency: curr
	}
};

const reducer = (state = initialState, action) => {

	switch (action.type) {
		case 'FETCH_TICKETS_REQUEST':
			return {
				tickets: [], // либо spread ...state
				initialTickets: [],
				loading: true,
				error: null,
				currency: 'RUB',
				stopsAmount: null,
				maxStops: null
			};
		case 'FETCH_TICKETS_SUCCESS':
			return {
				tickets: action.payload,
				initialTickets: action.payload,
				loading: false,
				error: null,
				currency: 'RUB',
				stopsAmount: null,
				maxStops: Math.max.apply(Math, action.payload.map(function(o) { return o.stops; }))
			};
		case 'FETCH_TICKETS_FAILURE':
			return {
				tickets: [],
				initialTickets: [],
				loading: false,
				error: action.payload,
				currency: 'RUB',
				stopsAmount: null,
				maxStops: null
			};
		case 'FILTER_BY_CURRENCY':
			return convertTicketsPrice(state, action.payload);
		case 'FILTER_BY_STOPS':
			return {
				...state,
				stopsAmount: action.payload,
			};
		default:
			return state
	}
};

export default reducer;