import React from 'react';
import Checkboxes from "../checkboxes";
import {compose} from "../../utils";
import withTicketsService from "../hoc/with-tickets-service";
import {connect} from "react-redux";
import {filterByStops, ticketsLoaded} from "../../actions";

const StopsFilter = ({className, stopsAmount, maxStops, onStopsChange}) => {
	return (
		<div className={`${className} filter`}>
			<div className='filter__header'>Количество пересадок</div>
			<div className='filter__content'>
				<Checkboxes maxStops={maxStops} stops={stopsAmount} onStopsChange={onStopsChange}/>
			</div>
		</div>
	)
};

const filter2TicketsByStops = (tickets, filter) => {
	switch (true) {
		case (filter !== null):
			tickets.filter(ticket => {
				console.log(ticket.stops);
				return ticket.stops === filter
			});
			break;
		default:
			return tickets
	}
};


// похоже можно сделать через реселект

const mapStateToProps = (state) => {
	return {
		maxStops: state.maxStops,
		// tickets: filter2TicketsByStops(state.tickets, state.stopsAmount)
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		onStopsChange: (stops) => {
			dispatch(filterByStops(stops))
		}
	}
};

export default compose(withTicketsService(), connect(mapStateToProps, mapDispatchToProps))(StopsFilter);