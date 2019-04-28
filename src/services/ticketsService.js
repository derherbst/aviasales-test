import ticketsList from '../tickets';

export default class TicketsService {

	data = ticketsList.tickets;

	getTickets() {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				// if (Math.random() > 0.75) {
				// 	reject(new Error('Something bad happened'));
				// } else {
					resolve(this.data);
				// }
			}, 700);
		});
	}

}