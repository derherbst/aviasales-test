import React from 'react';
import { withNaming } from '@bem-react/classname';

import CurrencyFilter from '../currency-filter';
import StopsFilter from '../stops-filter';

const cn = withNaming({ n: '', e: '__', m: '_' });

const filters = cn('filters');

const Filters = () => {
	return (
		<div className={filters()}>
			<CurrencyFilter className={filters('item')}/>
			<StopsFilter className={filters('item')}/>
		</div>
	)
};

export default Filters;