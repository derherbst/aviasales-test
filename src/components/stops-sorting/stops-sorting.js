import React, { Component } from 'react';

const filterButtons = [
	{name: 'RUB', label: 'RUB'},
	{name: 'USD', label: 'USD'},
	{name: 'EUR', label: 'EUR'}
];

class StopsSorting extends Component {

	render() {

		const tabs = filterButtons.map(({name, label}) => {
			return (
				<button key={name}
				        type="button"
				        onClick={() => console.log(123)}
				        className={123}>{label}
				</button>
			)
		});

		return (
			<div className='sorting'>
				<div className='sorting__tabs'>
					{ tabs }
				</div>
			</div>
		)
	}

}

export default StopsSorting;