import React from 'react';

import StopsSorting from '../stops-sorting';

const StopsFilter = ({className}) => {
	return (
		<div className={`${className} filter`}>
			<div className='filter__header'>Валюта</div>
			<div className='filter__content'>
				<StopsSorting />
			</div>
		</div>
	)
};

export default StopsFilter;