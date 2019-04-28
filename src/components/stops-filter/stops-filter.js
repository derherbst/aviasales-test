import React from 'react';
import Checkboxes from "../checkboxes";

const StopsFilter = ({className}) => {
	return (
		<div className={`${className} filter`}>
			<div className='filter__header'>Количество пересадок</div>
			<div className='filter__content'>
				<Checkboxes />
			</div>
		</div>
	)
};

export default StopsFilter;