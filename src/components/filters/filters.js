import React from 'react';

import CurrencyFilter from '../currency-filter';
import StopsFilter from '../stops-filter';

const Filters = () => {
	return (
		<div className='filters'>
			<CurrencyFilter className='filters__item' />
			<StopsFilter className='filters__item' />
		</div>
	)
};

export default Filters;