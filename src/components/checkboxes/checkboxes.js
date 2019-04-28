import React from 'react';

import './index.scss';

const Checkboxes = () => {
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
				<div className='checkboxes__item'>
					<label className='checkboxes__label'>
						<input className='checkboxes__input' type='checkbox' />
						<span className='checkboxes__checkmark'></span>
						Без пересадок
					</label>
					<div className="checkboxes__uncheck-other">Только</div>
				</div>
				<div className='checkboxes__item'>
					<label className='checkboxes__label'>
						<input className='checkboxes__input' type='checkbox' />
						<span className='checkboxes__checkmark'></span>
						1 пересадка
					</label>
					<div className="checkboxes__uncheck-other">Только</div>
				</div>
				<div className='checkboxes__item'>
					<label className='checkboxes__label'>
						<input className='checkboxes__input' type='checkbox' />
						<span className='checkboxes__checkmark'></span>
						2 пересадки
					</label>
					<div className="checkboxes__uncheck-other">Только</div>
				</div>
				<div className='checkboxes__item'>
					<label className='checkboxes__label'>
						<input className='checkboxes__input' type='checkbox' />
						<span className='checkboxes__checkmark'></span>
						3 пересадки
					</label>
					<div className="checkboxes__uncheck-other">Только</div>
				</div>
			</div>
		</div>
	)
};

export default Checkboxes