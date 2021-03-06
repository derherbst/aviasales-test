import React, { Component } from 'react';
import { connect } from 'react-redux';
import TicketItem from "../ticket-item";
import withTicketsService from '../hoc/with-tickets-service';

import { ticketsLoaded } from '../../actions';
import { compose } from "../../utils";

import './index.scss';

class TicketsList extends Component {

	componentDidMount() {
		const { ticketsService } = this.props;
		const data = ticketsService.getTickets().then((data) => this.props.ticketsLoaded(data));
		// console.log(data);
	}

	render() {
		const { tickets, currency } = this.props;

		return (
			<div className='tickets-list'>
				{
					tickets
						.sort((a, b) => {
							return a.price - b.price
						})
						.map((ticket) => {
							return (
								<div key={tickets.indexOf(ticket)} className='tickets-list__item'>
									<TicketItem ticket={ticket} currency={currency}/>
								</div>
							)
						})
				}
			</div>
		)
	}
}

const filter2TicketsByStops = (tickets, filter) => {
	console.log(tickets);
	switch (true) {
		case (filter.length !== 0):
			const filtered = tickets.filter(ticket => {
				console.log(ticket.stops);
				return ticket.stops === filter
			});
			return filtered;
		default:
			return tickets
	}
};

const mapStateToProps = (state) => {
	return {
		tickets: filter2TicketsByStops(state.tickets, state.stopsAmount),
		currency: state.currency
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		ticketsLoaded: (newTickets) => {
			dispatch(ticketsLoaded(newTickets))
		}
	}
};

export default compose(withTicketsService(), connect(mapStateToProps, mapDispatchToProps))(TicketsList);