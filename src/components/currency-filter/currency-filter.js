import React from 'react';
import Currencies from '../currencies';

import './index.scss';

const Filter = ({className}) => {
	return(
		<div className={`${className} filter`}>
			<div className="filter__header">Валюта</div>
			<div className="filter__content">
				<Currencies />
			</div>
		</div>
	)
};

export default Filter;