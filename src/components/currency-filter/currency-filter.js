import React from 'react';
import { withNaming } from '@bem-react/classname';
import { classnames } from '@bem-react/classnames';

const cn = withNaming({ n: '', e: '__', m: '_' });
const filter = cn('filter');

const CurrencyFilter = ({className}) => {
	return(
		<div className={classnames(className, filter())}>

		</div>
	)
};

export default CurrencyFilter;