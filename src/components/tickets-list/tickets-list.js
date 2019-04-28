import React from 'react';
import TicketItem from "../ticket-item";

const TicketsList = () => {
	return (
		<div className='tickets-list'>
			<div className='tickets-list__item'>
				<TicketItem />
			</div>
		</div>
	)
};

export default TicketsList;