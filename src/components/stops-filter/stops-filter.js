import React from 'react';
import { classnames } from '@bem-react/classnames';
import {withNaming} from "@bem-react/classname";

import StopsSorting from '../stops-sorting';

const cn = withNaming({ n: '', e: '__', m: '_' });
const filter = cn('filter');

const StopsFilter = ({className}) => {
	return (
		<div className={classnames(className, filter())}>
			<div className={filter('header')}>Валюта</div>
			<div className={filter('content')}>
				<StopsSorting />
			</div>
		</div>
	)
};

export default StopsFilter;