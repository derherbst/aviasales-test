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

const mapStateToProps = (state) => {
	return {
		tickets: state.tickets,
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