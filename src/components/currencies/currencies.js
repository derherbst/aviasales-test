import React, { Component } from 'react';

import './index.scss';

const filterButtons = [
	{name: 'RUB', label: 'RUB'},
	{name: 'USD', label: 'USD'},
	{name: 'EUR', label: 'EUR'}
];

class Currencies extends Component {

	render() {

		const tabs = filterButtons.map(({name, label}) => {
			return (
				<button key={name}
				        type="button"
				        onClick={() => console.log(123)}
				        className='currencies__tab'>{label}
				</button>
			)
		});

		return (
			<div className='currencies'>
				<div className='currencies__tabs'>
					{ tabs }
				</div>
			</div>
		)
	}

}

export default Currencies;