import React from 'react';

import './index.scss';

const TicketRoute = () => {
	return (
		<div className="ticket-route">
			<div className="ticket-route__info departure">
				<div className="ticket-route__time">9:25</div>
				<div className="ticket-route__origin">
					<span className='ticket-route__origin-port'>VVO, </span>
					<span className='ticket-route__origin-city'>Владивосток</span>
				</div>
				<div className="ticket-route__date">9 окт 2018, Пт</div>
			</div>
			<div className="ticket-route__transfers">
				<span>1 пересадка</span>
			</div>
			<div className="ticket-route__info arrival">
				<div className="ticket-route__time">11:45</div>
				<div className="ticket-route__origin">
					<span className='ticket-route__origin-city'>Тель-Авив, </span>
					<span className='ticket-route__origin-port'>TLV</span>
				</div>
				<div className="ticket-route__date">10 окт 2018, Сб</div>
			</div>
		</div>
	)
};

export default TicketRoute;