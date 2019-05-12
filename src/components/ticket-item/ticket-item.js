import React from 'react';
import Button from "../UI/button";

import './index.scss';
import TicketRoute from "../ticket-route";

const TicketItem = ({ ticket, currency }) => {

	const { price } = ticket;

	return (
		<div className='ticket'>
			<div className="ticket__aside">
				<div className="ticket__logo"></div>
				<div className="ticket__buy">
					<Button price={price} currency={currency}/>
				</div>
			</div>
			<div className="ticket__content">
				<div className="ticket__route">
					<TicketRoute ticket={ticket}/>
				</div>
			</div>
		</div>
	)
};

export default TicketItem;