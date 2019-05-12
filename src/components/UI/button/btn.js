import React from 'react';

import './index.scss';

const Button = ({price, currency}) => {
	return (
		<div className="btn btn--buy">
			<div className="btn__text">Купить</div>
			<div className="btn__price">
				<span className="btn__price-divider">за </span>
				<span className="btn__price-num">
					{price}
				{
					currency === 'RUB' ? '₽':
					currency === 'EUR' ? '€':
					currency === 'USD' ? '$':
					''
				}</span>
			</div>
		</div>
	)
};

export default Button;