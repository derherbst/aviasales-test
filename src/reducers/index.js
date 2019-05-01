const reducer = (state, action) => {
	if (state === undefined) {
		return {
			tickets: [],
			loading: true,
			error: null
		}
	}

	switch (action.type) {
		case 'FETCH_TICKETS_REQUEST':
			return {
				tickets: [], // либо spread ...state
				loading: true,
				error: null
			};
		case 'FETCH_TICKETS_SUCCESS':
			return {
				tickets: action.payload,
				loading: false,
				error: null
			};
		case 'FETCH_TICKETS_FAILURE':
			return {
				tickets: [],
				loading: false,
				error: action.payload
			};
		default:
			return state.tickets
	}
};

export default reducer;