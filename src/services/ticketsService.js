import ticketsList from '../tickets';

export default class TicketsService {

	data = ticketsList.tickets;

	getTickets() {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
					resolve(this.data);
			}, 700);
		});
	}

}