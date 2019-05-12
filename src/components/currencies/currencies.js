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
			const isActive = this.props.currency === name;
			const clazz = isActive ? 'active' : '';
			return (
				<button key={name}
				        type="button"
				        onClick={() => this.props.onCurrencyChange(name)}
				        className={`currencies__tab ${clazz}`}>{label}
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