const ticketsLoaded = (newTickets) => {
	return {
		type: 'FETCH_TICKETS_SUCCESS',
		payload: newTickets
	}
};

const ticketsRequested = () => {
	return {
		type: 'FETCH_TICKETS_REQUEST'
	}
};

const ticketsError = (error) => {
	return {
		type: 'FETCH_TICKETS_FAILURE',
		payload: error
	}
};

const filterByCurrency = (currency) => {
	return {
		type: 'FILTER_BY_CURRENCY',
		payload: currency
	}
};

const filterByStops = (stops, el) => {
	return {
		type: 'FILTER_BY_STOPS',
		payload: {
			stops,
			el
		}
	}
};

const fetchTickets = (ticketsService, dispatch) => () => { // не хотим чтобы компонент зависел от параметров поэтому передаем только в первую функцию
	dispatch(ticketsRequested());
	ticketsService.getTickets()
		.then((data) => {
			// 2. передаем действия в store с помощью dispatch
			dispatch(ticketsLoaded(data));
		})
		.catch((err) => dispatch(ticketsError(err)));
};

export {
	ticketsLoaded,
	ticketsRequested,
	ticketsError,
	filterByCurrency,
	filterByStops
}