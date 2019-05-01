import React from 'react';

import './index.scss';

const TicketRoute = ({ticket}) => {
	return (
		<div className="ticket-route">
			<div className="ticket-route__info departure">
				<div className="ticket-route__time">{ ticket['departure_time'] }</div>
				<div className="ticket-route__origin">
					<span className='ticket-route__origin-port'>{ ticket['origin'] }, </span>
					<span className='ticket-route__origin-city'>{ ticket['origin_name'] }</span>
				</div>
				<div className="ticket-route__date">{ ticket['departure_date'] }</div>
			</div>
			<div className="ticket-route__transfers">
				<span>{ ticket['stops'] + ` пересадк${ ticket['stops'] === 1 ? 'a' : 'и'}`}</span>
			</div>
			<div className="ticket-route__info arrival">
				<div className="ticket-route__time">{ ticket['arrival_time'] }</div>
				<div className="ticket-route__origin">
					<span className='ticket-route__origin-city'>{ ticket['destination_name'] }, </span>
					<span className='ticket-route__origin-port'>{ ticket['destination'] }</span>
				</div>
				<div className="ticket-route__date">{ ticket['arrival_date'] }</div>
			</div>
		</div>
	)
};

export default TicketRoute;