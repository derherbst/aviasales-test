let initialState = {
	initialTickets: [],
	tickets: [],
	loading: true,
	error: null,
	currency: 'RUB'
};

const updateTicketsList = (state, curr) => {

	const { initialTickets } = state;

	const newCurrency = initialTickets.map((ticket) => {
		if (curr === 'RUB') {
			return ticket
		} else if (curr === 'EUR') {
			return {
				...ticket,
				price: (ticket.price/73).toFixed(0)
			}
		} else if (curr === 'USD') {
			return {
				...ticket,
				price: (ticket.price/65).toFixed(0)
			}
		}
	});

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
				currency: 'RUB'
			};
		case 'FETCH_TICKETS_SUCCESS':
			return {
				tickets: action.payload,
				initialTickets: action.payload,
				loading: false,
				error: null,
				currency: 'RUB'
			};
		case 'FETCH_TICKETS_FAILURE':
			return {
				tickets: [],
				initialTickets: [],
				loading: false,
				error: action.payload,
				currency: 'RUB'
			};
		case 'FILTER_BY_CURRENCY':
			return updateTicketsList(state, action.payload);
		default:
			return state
	}
};

export default reducer;