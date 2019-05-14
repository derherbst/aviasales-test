import React, { Component } from 'react';

import './index.scss';

class Checkboxes extends Component {

	createCheckboxes = (maxStops) => {
		let checkboxes = [];
		for (let i = 0; i <= maxStops; i++) {
			checkboxes.push(
				<div key={i} className='checkboxes__item'>
					<label className='checkboxes__label'>
						<input className='checkboxes__input' type='checkbox' />
						<span className='checkboxes__checkmark'></span>
							{i === 0 ? 'Без пересадок' : `${i} пересадка`}
					</label>
				</div>
			)
		}
		return checkboxes
	};

	render() {
		return (
			<div className='checkboxes'>
				<div className='checkboxes__item'>
					<label className='checkboxes__label'>
						<input className='checkboxes__input' type='checkbox' />
						<span className='checkboxes__checkmark'></span>
						Все пересадки
					</label>
				</div>
				<div className="checkboxes__list">
					{
						this.createCheckboxes(this.props.maxStops)
					}
				</div>
			</div>
		)
	}

};

export default Checkboxes