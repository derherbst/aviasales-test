import React from 'react';

import './index.scss';

const Button = () => {
	return (
		<div className="btn btn--buy">
			<div className="btn__text">Купить</div>
			<div className="btn__price">
				<span className="btn__price-divider">за</span>
				<span className="btn__price-тгь">21 032Р</span>
			</div>
		</div>
	)
};

export default Button;