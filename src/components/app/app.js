import React, { Component } from 'react';

import Filters from '../filters';
import TicketsList from '../tickets-list';
import TicketsService from '../../services/ticketsService';

import './index.scss';

import SvgPlane from '../../assets/icons/Plane';

const ticketsService = new TicketsService();

export default class App extends Component {

	componentDidMount() {
		console.log(ticketsService.getTickets())
	}

	render() {
		return(
			<div className='app'>
				<div className='app__inner'>
					<div className='app__sidePanel'>
						<Filters />
					</div>
					<div className='app__content'>
						<TicketsList />
					</div>
				</div>
			</div>
		)
	}
}
